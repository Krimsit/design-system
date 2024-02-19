import * as fs from 'fs'

import {
  generateThemeType,
  generateCollectionsCode,
  generateComponentsTypesCode,
  generateIndexFile,
  generateRootTypesIndex,
} from '../generate-code'
import { themeFiles, tmpBuildPath } from '../../../constants'

import type { ParsedTheme } from '../../../types'

export const generateCode = (
  themes: ParsedTheme[],
  globalThemePrefix?: string
): void => {
  fs.mkdir(themeFiles.rootPath, () => {
    fs.mkdir(themeFiles.typesPath, () => {
      fs.mkdir(themeFiles.collectionsTypesPath, () => {
        fs.mkdir(themeFiles.componentsTypesPath, () => {
          generateComponentsTypesCode(themes[0])
          generateCollectionsCode(themes[0])
          generateThemeType(themes[0], globalThemePrefix)
          generateRootTypesIndex()
          generateIndexFile(themes)

          const code = `
            import type { ThemeType } from './types'

            ${themes
              .map((item) => {
                const stringifyCode = JSON.stringify(item.collections)

                return `export const ${item.name}Theme: ThemeType = ${
                  globalThemePrefix
                    ? `{ ${globalThemePrefix}: ${stringifyCode} }`
                    : stringifyCode
                }`
              })
              .join('\n\n')}
          `

          fs.writeFile(
            `${themeFiles.rootPath}/${themeFiles.mainTypeFileName}.ts`,
            code,
            () => {
              fs.rmSync(tmpBuildPath, { recursive: true })
            }
          )
        })
      })
    })
  })
}
