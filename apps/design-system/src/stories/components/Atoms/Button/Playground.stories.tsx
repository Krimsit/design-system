import { ThemeProvider } from 'styled-components'
import { Button } from '@shared/ui'
import { lightTheme } from '@shared/theme'
import { FilledActionAndroid, FilledActionArrowRightAlt } from '@shared/icons'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  tags: ['components'],
  args: {
    onPress: () => console.log('Clicked!)'),
  },
  argTypes: {
    color: {
      control: 'radio',
    },
    variant: {
      control: 'radio',
    },
    size: {
      control: 'radio',
    },
    iconLeft: {
      control: 'boolean',
    },
    iconRight: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    loading: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    onPress: {
      action: true,
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XqZnq2zfxk89JJcOsyTVG4/Altenar-UI?type=design&node-id=3030-57931&mode=design&t=4NinxkjEW0uIc2FG-4',
    },
  },
} satisfies Meta<typeof Button>

export const Playground: StoryObj<typeof Button> = {
  args: {
    color: 'primary',
    variant: 'filled',
    size: 'm',
    iconLeft: FilledActionAndroid,
    iconRight: FilledActionArrowRightAlt,
    label: 'Button',
  },
  render: (props) => (
    <ThemeProvider theme={lightTheme}>
      <Button {...props} />
    </ThemeProvider>
  ),
}
