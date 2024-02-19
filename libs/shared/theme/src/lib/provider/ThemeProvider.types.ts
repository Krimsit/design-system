import * as themes from '../theme/themes'

import type { ThemeType } from '../theme'

export type ThemeVariant = keyof typeof themes

export type ThemeProviderProps = { theme: ThemeVariant }
