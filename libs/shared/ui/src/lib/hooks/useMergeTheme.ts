import { IconComponentTheme, useTheme } from '@shared/theme'

import { getValueFromObject, setValueInObject, merge } from '../utils'

import type { ThemeType } from '@shared/theme'
import type { Paths } from '../types'

export const useMergeTheme = <TokensType>(
  tokens: TokensType,
  tokensPath: Paths<ThemeType>
): ThemeType => {
  const theme = useTheme()
  const defaultTokens = getValueFromObject(theme, tokensPath)
  const mergedTokens = merge<object>(
    defaultTokens,
    tokens ?? {}
  ) as IconComponentTheme
  setValueInObject(theme, tokensPath, mergedTokens)

  return theme
}
