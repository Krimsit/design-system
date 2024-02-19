import type { TransformedTokens } from 'style-dictionary'
import type { ParsedTheme } from '../../../types'

export const parseJsonToThemes = (tokens: TransformedTokens): ParsedTheme[] =>
  Object.keys(tokens).map((key) => ({
    name: key,
    collections: tokens[key],
  }))
