import {
  getCorrectName,
  parseVariableValue,
  path2Obj,
  getVariablePath,
  parseVariable,
} from '../helpers'

import type { CollectionVariables } from '../../../types'
import type {
  Mode,
  ParsedMode,
  ParsedModeCollection,
  SplittedModeCollection,
} from '../types'

const parseCollectionVariables = (
  collection: SplittedModeCollection,
  mode: Mode,
): CollectionVariables => {
  const variables: CollectionVariables = {}

  collection.variables.forEach((variable) => {
    const variablePathInObject = getVariablePath(variable.name)
    const variableValue = parseVariable(variable, mode.name)
    const parsedValue = parseVariableValue(variableValue)

    path2Obj(variablePathInObject, parsedValue, variables)
  })

  return variables
}

const parseModeCollection = (mode: Mode): ParsedModeCollection => {
  const collections: ParsedModeCollection[] = mode.collections.map(
    (collection) => {
      const collectionVariables = parseCollectionVariables(collection, mode)
      const collectionName = getCorrectName(collection.name)

      return {
        [collectionName]: collectionVariables,
      }
    },
  )

  return collections.reduce<ParsedModeCollection>(
    (collections, currentCollection) => ({
      ...collections,
      ...currentCollection,
    }),
    {},
  )
}

export const parseMode = (mode: Mode): ParsedMode => {
  const name = getCorrectName(mode.name)
  const collections: ParsedModeCollection = parseModeCollection(mode)

  return {
    name,
    collections,
  }
}
