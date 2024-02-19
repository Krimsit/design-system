import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@shared/theme'
import * as icons from '@shared/icons'
import { Icon } from '@shared/ui'

import type { Meta, StoryObj } from '@storybook/react'
import type { IconProps } from '@shared/ui'

export default {
  title: 'Components/Atoms/Icon',
  component: Icon,
  tags: ['component', 'no-test'],
  args: {
    icon: icons.FilledActionAndroid,
    size: 'l',
    color: 'currentColor',
  },
  argTypes: {
    color: {
      control: 'color',
    },
    size: {
      control: 'number',
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(icons),
      mapping: icons,
    },
  },
} satisfies Meta<IconProps>

export const Playground: StoryObj<IconProps> = {
  render: (props) => (
    <ThemeProvider theme={lightTheme}>
      <Icon {...props} />
    </ThemeProvider>
  ),
}
