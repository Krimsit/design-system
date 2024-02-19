import * as path from 'path'
import * as fs from 'fs'

import axios from 'axios'

import type { FigmaIcon } from './types'

export const downloadIcon = (
  icon: FigmaIcon,
  libSvgPath: string,
): Promise<boolean> => {
  const { name, imageUrl } = icon
  const iconPath = path.resolve(libSvgPath, `${name}.svg`)
  const iconWriter = fs.createWriteStream(iconPath)

  void axios
    .get<fs.WriteStream>(imageUrl, { responseType: 'stream' })
    .then(({ data }) => {
      data.pipe(iconWriter)
    })
    .catch((err) => {
      console.error(`Errors occurred when downloading the icon ${name}: ${err}`)
    })

  return new Promise((resolve, reject) => {
    iconWriter.on('finish', () => resolve(true))

    iconWriter.on('error', (err) => {
      reject(`Errors occurred when writting icon ${name} to file: ${err}`)
    })
  })
}

export const updateIndexFile = (
  icon: FigmaIcon,
  libIndexPath: string,
): Promise<boolean> =>
  new Promise((resolve, reject) => {
    const exportString = `export { ReactComponent as ${icon.name} } from './svg/${icon.name}.svg'\n\n`

    fs.appendFile(libIndexPath, exportString, (err) => {
      if (err) {
        reject(err)

        return
      }

      resolve(true)
    })
  })

export const getIconName = (originalName: string): string => {
  const nameArray = originalName
    .trim()
    .split(/[/\-,→_ ]/)
    .map((item) => item.trim().toLowerCase())
    .filter((item) => Boolean(item))
  const fileName = nameArray.map((item) =>
    item
      .split(/[/\-,→_ ]/)
      .map((item) => {
        const path = item[0].toUpperCase() + item.substring(1)

        return path.replace('.svg', '')
      })
      .join(''),
  )
  const postfix: string[] = []
  const prefix: string[] = []

  fileName.forEach((item) => {
    if (Number.isNaN(Number(item[0]))) {
      prefix.push(item)
    } else {
      postfix.push(item)
    }
  })

  return [...prefix, ...postfix].join('')
}

export const splitArrayIntoChunk = <T = string>(arr: T[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size),
  )
