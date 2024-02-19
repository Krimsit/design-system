import * as fs from 'fs'

import { themeFiles } from '../../../constants'
import { generateCollectionTypeCode, getCorrectTypeName } from '../helpers'

import type { ParsedTheme } from '../../../types'

export const generateThemeType = (
  theme: ParsedTheme,
  globalThemePrefix?: string,
): void => {
  const { collections } = theme
  const types = Object.keys(collections)
    .map((key) => getCorrectTypeName(`${key}Type`))
    .join(', ')
  const importsCode = `import type { ${types} } from './collections' `
  const collectionsCode = generateCollectionTypeCode(
    collections,
    `ThemeType`,
    'Type',
    globalThemePrefix,
  )
  const fileCode = [importsCode, collectionsCode].join('\n\n')
  const filePath = `${themeFiles.typesPath}/${themeFiles.mainTypeFileName}.ts`

  fs.writeFile(filePath, fileCode, (err) => {
    if (err) throw err
  })
}
