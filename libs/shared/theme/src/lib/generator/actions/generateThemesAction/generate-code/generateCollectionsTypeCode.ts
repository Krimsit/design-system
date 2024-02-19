import * as fs from 'fs'

import { themeFiles } from '../../../constants'
import { generateTypeCode, generateCollectionsIndex } from '../helpers'

import type { CollectionVariables, ParsedTheme } from '../../../types'

export const generateCollectionsCode = (theme: ParsedTheme): void => {
  const { collections } = theme

  Object.keys(collections).forEach((key) => {
    if (key !== 'components') {
      const collection = collections[key] as CollectionVariables
      const code = generateTypeCode(
        collection,
        `${key}${themeFiles.collectionTypeNamePostfix}`,
      )
      const filePath = `${themeFiles.collectionsTypesPath}/${key}${themeFiles.collectionTypeFilePostfix}.ts`

      fs.writeFileSync(filePath, code)
    }
  })

  const indexCode = [
    `export * from './components'`,
    generateCollectionsIndex(
      collections,
      themeFiles.collectionTypeNamePostfix,
      themeFiles.collectionTypeFilePostfix,
    ),
  ].join('\n\n')
  const indexFilePath = `${themeFiles.collectionsTypesPath}/index.ts`

  fs.writeFileSync(indexFilePath, indexCode)
}
