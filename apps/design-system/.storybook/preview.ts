import '@storybook/addon-console'
import { setConsoleOptions } from '@storybook/addon-console'

const panelExclude = setConsoleOptions({}).panelExclude
setConsoleOptions({
  panelExclude: [...panelExclude, /deprecated/],
})

const preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Overview',
          'Changelog',
          'Tokens',
          ['Palette', 'Branding', 'Spacing', 'Border Radius'],
          'Components',
        ],
      },
    },
  },
}

export default preview
