import * as fs from 'fs'

import { themeFiles } from '../../../constants'
import {
  generateCollectionsIndex,
  generateCollectionTypeCode,
  generateTypeCode,
  getCorrectTypeName,
} from '../helpers'

import type { CollectionVariables, ParsedTheme } from '../../../types'

const generateComponentType = (collections: CollectionVariables): void =>
  Object.keys(collections).forEach((key) => {
    const code = generateTypeCode(
      collections[key] as CollectionVariables,
      `${key}${themeFiles.componentTypeNamePostfix}`,
    )
    const filePath = `${themeFiles.componentsTypesPath}/${key}.ts`

    fs.writeFileSync(filePath, code)
  })

export const generateComponentsTypesCode = (theme: ParsedTheme) => {
  const { collections } = theme

  Object.keys(collections).forEach((key) => {
    if (key === 'components') {
      const collection = collections[key] as CollectionVariables
      const types = Object.keys(collection)
        .map((key) =>
          getCorrectTypeName(`${key}${themeFiles.componentTypeNamePostfix}`),
        )
        .join(', ')
      const importsCode = `import type { ${types} } from './components' `
      const collectionTypeCode = generateCollectionTypeCode(
        collection,
        `${key}${themeFiles.collectionTypeNamePostfix}`,
        themeFiles.componentTypeNamePostfix,
      )
      const indexCode = generateCollectionsIndex(collection, 'ComponentTheme')
      const fileCode = [importsCode, collectionTypeCode].join('\n\n')
      const filePath = `${themeFiles.collectionsTypesPath}/${key}${themeFiles.collectionTypeFilePostfix}.ts`
      const componentIndexFilePath = `${themeFiles.componentsTypesPath}/index.ts`

      generateComponentType(collection)

      fs.writeFileSync(filePath, fileCode)
      fs.writeFileSync(componentIndexFilePath, indexCode)
    }
  })
}
