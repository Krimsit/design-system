import { createContext, useContext } from 'react'
import {
  ThemeProvider as StyledThemeProvider,
  useTheme as useStyledTheme,
} from 'styled-components'

import type { FC, PropsWithChildren } from 'react'
import type { ThemeType } from '../theme'
import type { ThemeProviderProps } from './ThemeProvider.types'

const ThemeContext = createContext<ThemeType>({} as ThemeType)

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
  theme,
}) => {
  const styledTheme = useStyledTheme()

  return (
    <ThemeContext.Provider value={theme}>
      <StyledThemeProvider theme={{ ...styledTheme, v2: theme }}>
        {children}
      </StyledThemeProvider>
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
