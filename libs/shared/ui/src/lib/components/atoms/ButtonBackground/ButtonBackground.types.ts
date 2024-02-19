import type { ButtonBackgroundComponentTheme } from '@shared/theme'
import type { DeepPartial } from '../../../types'

export type ButtonBackgroundToken = DeepPartial<ButtonBackgroundComponentTheme>

export type ButtonColor = keyof ButtonBackgroundComponentTheme['color']

export type ButtonVariant =
  keyof ButtonBackgroundComponentTheme['color']['primary']
