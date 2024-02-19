import type {
  CollectionVariables,
  ParsedTheme,
  ParsedVariable,
} from '../../../types'
import type { ParsedMode } from '../types'

const fixThemeLink = (
  collection: CollectionVariables,
  themeName: string,
): CollectionVariables =>
  Object.keys(collection).reduce((acc, key) => {
    const collectionObject = collection[key]

    if (Object.hasOwn(collectionObject, 'attributes')) {
      const object = collectionObject as ParsedVariable

      if (object.attributes?.isAlias) {
        return {
          ...acc,
          [key]: {
            ...object,
            value: String(object.value).replace('style', themeName),
            attributes: {
              ...collectionObject.attributes,
              theme: themeName,
            },
          },
        }
      }

      return {
        ...acc,
        [key]: collectionObject,
      }
    }

    return {
      ...acc,
      [key]: fixThemeLink(collectionObject as CollectionVariables, themeName),
    }
  }, {})

export const parseModesToThemes = (modes: ParsedMode[]): ParsedTheme[] => {
  const defaultMode = modes.find((item) => item.name === 'style')
  const themes = modes.reduce<ParsedTheme[]>((modes, currentMode) => {
    if (currentMode.name === 'style') {
      return modes
    }

    const collections = defaultMode
      ? {
          ...currentMode.collections,
          ...defaultMode.collections,
        }
      : currentMode.collections

    return [
      ...modes,
      {
        ...currentMode,
        collections,
      },
    ]
  }, [])

  return themes.map((theme) => {
    const collections = fixThemeLink(theme.collections, theme.name)

    return {
      ...theme,
      collections,
    }
  })
}
