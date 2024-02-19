import { registerGenerateThemesAction } from './generateThemesAction'

import type { Core } from 'style-dictionary'

export const registerCustomActions = (styleDictionary: Core) => {
  registerGenerateThemesAction(styleDictionary)
}
