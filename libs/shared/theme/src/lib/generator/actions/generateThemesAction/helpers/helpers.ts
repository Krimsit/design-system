import type { CollectionVariables } from '../types'

export const getCorrectTypeName = (name: string) =>
  name
    .split('')
    .map((item, index) => {
      if (index === 0) return item.toUpperCase()

      return item
    })
    .join('')

export const generateTypeCode = (
  collection: CollectionVariables,
  typeName: string,
): string => {
  const generateType = (collection: CollectionVariables): string =>
    Object.keys(collection)
      .map((key) => {
        const variableValue = collection[key] as CollectionVariables

        if (typeof variableValue !== 'object') {
          return `"${key}": ${typeof variableValue}`
        }

        return `"${key}": {${generateType(
          variableValue as CollectionVariables,
        )} }`
      })
      .join('\n')

  return `export type ${getCorrectTypeName(typeName)} = { ${generateType(
    collection,
  )} }`
}

export const generateCollectionTypeCode = (
  collections: CollectionVariables,
  typeName: string,
  typePostfix = '',
  collectionPrefix = '',
): string => {
  const typeString = Object.keys(collections)
    .map((key) => `"${key}": ${getCorrectTypeName(`${key}${typePostfix}`)}`)
    .join('\n')

  return `export type ${getCorrectTypeName(typeName)} = { ${
    collectionPrefix ? `${collectionPrefix}: { ${typeString} }` : typeString
  } }`
}

export const generateCollectionsIndex = (
  collections: CollectionVariables,
  typePostfix = '',
  filePostfix = '',
): string =>
  Object.keys(collections)
    .map(
      (key) =>
        `export type { ${getCorrectTypeName(
          `${key}${typePostfix}`,
        )} } from './${key}${filePostfix}'`,
    )
    .join('\n\n')

export const generateTypesImport = (
  collections: CollectionVariables,
  importPath = './',
  typePostfix = '',
  fileNamePostfix = '',
): string =>
  Object.keys(collections)
    .map(
      (key) =>
        `import type { ${getCorrectTypeName(
          `${key}${typePostfix}`,
        )} } from '${importPath}/${key}${fileNamePostfix}'`,
      '',
    )
    .join('\n')
