/**
 * DefaultTheme declaration file.
 *
 * Add this file to the ts configuration to define the styled-components theme
 * with the types defined in the file
 *
 * EX: tsconfig.lib.json
 * "files": [
 *    ...,
 *    "../<path-to>/types/themes.d.ts"
 * ]
 */

import 'styled-components'
import { ThemeType } from '../libs/shared/theme/src'

declare module 'styled-components' {
  export interface DefaultTheme extends Required<ThemeType> {}
}
