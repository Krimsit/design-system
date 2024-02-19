import type { FC, PropsWithChildren } from 'react'
import { createContext, useContext } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import * as themes from '../theme/themes'

import type { ThemeType } from '../theme'
import type { ThemeProviderProps } from './ThemeProvider.types'

const ThemeContext = createContext<ThemeType>({} as ThemeType)

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
  theme,
}) => {
  const themeObject = themes[theme]

  return (
    <ThemeContext.Provider value={themeObject}>
      <StyledThemeProvider theme={themeObject}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeType => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be in ThemeProvider from @shared/theme')
  }

  return context
}
