import { registerParseThemeParser } from './parseThemeParser'

import type { Core } from 'style-dictionary'

export const registerCustomParsers = (styleDictionary: Core) => {
  registerParseThemeParser(styleDictionary)
}
