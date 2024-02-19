import type { ParsedTheme } from '../../../types'

export const generateJson = (themes: ParsedTheme[]): object =>
  themes.reduce(
    (acc, currentValue) => ({
      ...acc,
      [currentValue.name]: currentValue.collections,
    }),
    {},
  )
