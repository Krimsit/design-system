import type {
  LinkVariableValue,
  Variable,
  ParsedVariable,
} from '../../../types'

type Obj = {
  [key: string]: NonNullable<unknown> | number | string
}

export const path2Obj = (
  path: string[],
  value: NonNullable<unknown> | number | string,
  obj: Obj,
) => {
  path.reduce(
    (acc, currentValue, currentIndex, initialArray) =>
      acc[currentValue] ||
      (acc[currentValue] =
        currentIndex === initialArray.length - 1 ? value : {}),
    obj,
  )
}

export const getCorrectName = (name: string) =>
  name
    .toLowerCase()
    .split(/[/\-,→ ]/)
    .map((item, index) => {
      if (index !== 0 && item) {
        return item[0].toUpperCase() + item.substring(1)
      }

      return item
    })
    .join('')

export const getVariablePath = (originalPath: string) => {
  const correctPathArray = originalPath
    .split('/')
    .map((item) => item.toLowerCase())

  return correctPathArray.map((item) => getCorrectName(item))
}

export const parseVariableValue = (variable: ParsedVariable) => {
  if (variable.attributes?.isAlias) {
    const value = variable.value as LinkVariableValue
    const path = [
      getCorrectName(variable.attributes.theme),
      getCorrectName(value.collection),
      ...getVariablePath(String(value.name)),
    ].join('.')

    return {
      ...variable,
      value: `{${path}}`,
    }
  }

  return variable
}

export const parseVariable = (
  variable: Variable,
  themeName: string,
): ParsedVariable => {
  switch (variable.type) {
    case 'color':
      return {
        value: variable.value,
        attributes: {
          category: 'color',
          theme: themeName,
          isAlias: Boolean(variable.isAlias),
        },
      }
    case 'number':
      return {
        value: variable.value,
        attributes: {
          category: 'size',
          theme: themeName,
          isAlias: Boolean(variable.isAlias),
        },
      }
    case 'typography':
      return {
        value: variable.value,
        attributes: {
          category: 'typography',
          theme: themeName,
          isAlias: Boolean(variable.isAlias),
        },
      }
    default:
      return {
        value: variable.value,
        attributes: {
          category: 'other',
          theme: themeName,
          isAlias: Boolean(variable.isAlias),
        },
      }
  }
}
