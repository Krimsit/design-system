import type { InputJson, Mode, ParsedCollection, SplittedMode } from '../types'

export const splitModes = (tokens: InputJson): Mode[] => {
  const parsedCollections: ParsedCollection[] = []

  tokens.collections.forEach((collection) => {
    const parsedCollection: ParsedCollection[] = collection.modes.map(
      (mode, index) => ({
        mode: mode.name,
        collection: {
          name: collection.name,
          variables: collection.modes[index].variables,
        },
      }),
    )

    parsedCollections.push(...parsedCollection)
  })

  const modes = parsedCollections.reduce<SplittedMode>(
    (parsedModes, currentCollection) => {
      const modeCollections = parsedModes[currentCollection.mode]
        ? [...parsedModes[currentCollection.mode], currentCollection.collection]
        : [currentCollection.collection]

      return {
        ...parsedModes,
        [currentCollection.mode]: modeCollections,
      }
    },
    {},
  )

  return Object.keys(modes).map((key) => ({
    name: key,
    collections: modes[key],
  }))
}
