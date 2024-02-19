import * as fs from 'fs'
import * as process from 'process'

import axios from 'axios'

import {
  getIconName,
  downloadIcon,
  updateIndexFile,
  splitArrayIntoChunk,
} from './helpers'
import { defaultConfig } from './constants'

import type { AxiosInstance } from 'axios'
import type {
  ClientConfig,
  FigmaIcon,
  FigmaNode,
  FigmaData,
  FigmaImage,
} from './types'

class FigmaClient {
  private config: ClientConfig = defaultConfig
  private libPath = ''
  private libSvgPath = ''
  private libIndexPath = ''
  private api: AxiosInstance = axios.create({})
  private icons: FigmaIcon[] = []

  constructor(props: ClientConfig) {
    const libPath = props.iconsPath
    const libSvgPath = `${props.iconsPath}/svg`
    const libIndexPath = `${props.iconsPath}/index.ts`
    const figmaApi = axios.create({
      baseURL: 'https://api.figma.com/v1',
      headers: {
        'Content-Type': 'application/json',
        'X-Figma-Token': props.figmaPersonalToken,
      },
    })

    this.api = figmaApi
    this.libPath = libPath
    this.libSvgPath = libSvgPath
    this.libIndexPath = libIndexPath
    this.config = props
  }

  private init = (): Promise<boolean> =>
    new Promise((resolve, reject) => {
      console.log(`Initializing the launch for frame ${this.config.frame}`)

      const isLibExist = fs.existsSync(this.libPath)
      const isLibSvgExist = fs.existsSync(this.libSvgPath)
      const isIndexFileExist = fs.existsSync(this.libIndexPath)

      if (!isLibExist) {
        fs.mkdirSync(this.libPath, { recursive: true })
      }

      if (!isLibSvgExist) {
        fs.mkdirSync(this.libSvgPath, { recursive: true })
      }

      if (isIndexFileExist) {
        fs.truncate(this.libIndexPath, 0, (err) => {
          if (err) reject(err)

          resolve(true)
        })
      } else {
        fs.writeFile(this.libIndexPath, '', (err) => {
          if (err) reject(err)

          resolve(true)
        })
      }
    })

  private getPathToFrame = (
    root: FigmaNode,
    currentPath: string[],
  ): FigmaNode => {
    if (currentPath.length === 0) return root

    const path = [...currentPath]
    const name = path.shift()
    const foundChild = root.children.find((item) => item.name === name)

    if (!foundChild) {
      return root
    }

    return this.getPathToFrame(foundChild, path)
  }

  private getFigmaData = async (): Promise<void> => {
    try {
      console.log(
        'Fetching Figma file (this might take a while depending on the figma file size)',
      )

      const { data } = await this.api.get<FigmaData>(
        `/files/${this.config.fileId}`,
      )
      const {
        document: { children },
      } = data
      const page = children.find((item) => item.name === this.config.page)

      if (!page) {
        console.error('Cannot find Icons Page')

        return
      }

      const frameNameArray = this.config.frame.split('/').filter(Boolean)
      const frameName = frameNameArray.pop()
      const frameRoot = this.getPathToFrame(page, frameNameArray)
      const iconsInFrame = frameRoot.children.find(
        (item) => item.name === frameName,
      )?.children

      if (!iconsInFrame) {
        throw new Error(
          `Cannot find ${frameName} Frame in page ${this.config.page}`,
        )
      }

      const iconsArray: FigmaIcon[] = iconsInFrame.map((item) => ({
        id: item.id,
        name: item.name,
        imageUrl: '',
      }))

      console.log(`The ${this.config.frame} frame was successfully fetched`)

      this.icons = iconsArray
    } catch (err) {
      throw new Error(`Cannot get Figma file: ${err}`)
    }
  }

  private getIconsFromFrame = async (): Promise<void> => {
    try {
      console.log(`Getting icons from frame ${this.config.frame}`)

      const iconIds = this.icons.map((icon) => icon.id)
      const iconsIdsChunks = splitArrayIntoChunk<string>(iconIds, 100)
      const chunksQueries = iconsIdsChunks.map((icons) =>
        this.api.get<FigmaImage>(
          `/images/${this.config.fileId}?ids=${icons.join(',')}&format=svg`,
        ),
      )
      const result = await Promise.all(chunksQueries)
      const imagesObjArray = result.map((item) => item.data.images)
      const images = imagesObjArray.reduce(
        (acc, currentValue) => ({
          ...acc,
          ...currentValue,
        }),
        {},
      )
      const updatedData = this.icons.map((icon) => ({
        ...icon,
        name: getIconName(icon.name),
        imageUrl: images[icon.id],
      }))

      console.log(
        `${updatedData.length} icons have been successfully fetched from frame ${this.config.frame}`,
      )

      this.icons = updatedData
    } catch (err) {
      throw new Error(
        `Cannot get icons from frame ${this.config.frame}: ${err}`,
      )
    }
  }

  run = async () => {
    try {
      await this.init()
      await this.getFigmaData()
      await this.getIconsFromFrame()

      const iconsForDownload = this.icons.map((icon) =>
        downloadIcon(icon, this.libSvgPath),
      )
      const downloadIconResult = await Promise.all(iconsForDownload)
      const isSuccessDownloadIcons = downloadIconResult.every((item) =>
        Boolean(item),
      )

      if (isSuccessDownloadIcons) {
        console.log(`Download icons from frame ${this.config.frame} finished`)

        const iconsForUpdateIndex = this.icons.map((icon) =>
          updateIndexFile(icon, this.libIndexPath),
        )
        const updateIndexResult = await Promise.all(iconsForUpdateIndex)
        const isSuccessUpdateIndex = updateIndexResult.every((item) =>
          Boolean(item),
        )

        if (isSuccessUpdateIndex) {
          console.log(
            `Generate icons index file from frame ${this.config.frame} finished`,
          )
        } else {
          throw new Error('Something went wrong when updating the index file')
        }
      } else {
        throw new Error('Something went wrong when downloading icons')
      }
    } catch (err) {
      console.error(err)

      process.exit(1)
    }
  }
}

export default FigmaClient
