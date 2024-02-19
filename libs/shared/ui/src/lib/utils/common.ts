import type { Paths } from '../types'

export const getValueFromObject = (obj: object, path: string) => {
  const keysArray = path.split('.')
  let newobj = JSON.parse(JSON.stringify(obj))
  for (let i = 0; i < keysArray.length; i++) {
    if (typeof newobj[keysArray[i]] === 'undefined') {
      return newobj[keysArray[i]]
    }
    newobj = newobj[keysArray[i]]
  }
  return newobj
}

export const setValueInObject = <
  Value,
  Obj extends object,
  Path extends Paths<Obj>
>(
  obj: Obj,
  path: Path,
  value: Value
) => {
  const chunks = path.split('.')
  chunks.reduce<Record<string, any>>((acc, chunk, index) => {
    acc[chunk] ??= {}

    if (index === chunks.length - 1) acc[chunk] = value

    return acc[chunk]
  }, obj)
}
