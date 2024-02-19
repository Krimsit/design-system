import '@storybook/addon-console'
import { setConsoleOptions } from '@storybook/addon-console'
import { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { ThemeProvider } from '@shared/theme'
import * as themes from '@shared/theme/objects'

const panelExclude = setConsoleOptions({}).panelExclude
const themesName = Object.keys(themes).map((name) => name)

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
      themes: themesName.reduce(
        (acc, themeName) => ({
          ...acc,
          [themeName]: themeName,
        }),
        {}
      ),
      defaultTheme: `lightTheme`,
      Provider: ThemeProvider,
    }),
  ],
  parameters: {
    options: {
      storySort: {
        order: [
          'Overview',
          'Changelog',
          'Tokens',
          ['Palette', 'Branding', 'Spacing', 'Border Radius'],
          'Icons',
          'Components',
          ['Atoms', 'Molecules', 'Organisms'],
        ],
      },
    },
  },
}

setConsoleOptions({
  panelExclude: [...panelExclude, /deprecated/],
})

export default preview
