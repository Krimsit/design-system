import {
  parseMode,
  parseModesToThemes,
  splitModes,
  generateJson,
} from './formatters'

import type { Core, DesignTokens } from 'style-dictionary'
import type { InputJson } from './types'

export const registerParseThemeParser = (styleDictionary: Core) =>
  styleDictionary.registerParser({
    pattern: /tokens.json$/,
    parse({ contents }) {
      const tokens = JSON.parse(contents) as InputJson
      const modes = splitModes(tokens)
      const parsedModes = modes.map((mode) => parseMode(mode))
      const themes = parseModesToThemes(parsedModes)
      const json = generateJson(themes)

      return json as DesignTokens
    },
  })
