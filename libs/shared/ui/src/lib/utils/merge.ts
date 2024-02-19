import type { Obj } from '../types'

const merge = <T extends Obj>(target: T, source: T): T => {
  const copyTarget = { ...target }
  const copySource = { ...source }

  for (const key of Object.keys(copySource)) {
    const isObject =
      copySource[key] instanceof Object &&
      key in copyTarget &&
      // because of css function from styled-components, that creates an array with styles
      !Array.isArray(copySource[key])

    if (isObject) {
      Object.assign(copySource[key], merge(copyTarget[key], copySource[key]))
    }
  }

  Object.assign(copyTarget, copySource)

  return copyTarget
}

export default merge
