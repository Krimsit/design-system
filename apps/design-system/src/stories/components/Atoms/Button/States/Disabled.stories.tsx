import { ThemeProvider } from 'styled-components'
import { Button } from '@shared/ui'
import { FilledActionAndroid, FilledActionArrowRightAlt } from '@shared/icons'
import { lightTheme } from '@shared/theme'
import { action } from '@storybook/addon-actions'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Atoms/Button/States/Disabled',
  component: Button,
  args: {
    color: 'primary',
    size: 'm',
    variant: 'filled',
    iconLeft: FilledActionAndroid,
    iconRight: FilledActionArrowRightAlt,
    loading: false,
    onPress: action('onPress'),
  },
  argTypes: {
    isDisabled: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
    onPress: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Button>

export const Disabled: StoryObj<typeof Button> = {
  render: (props) => (
    <ThemeProvider theme={lightTheme}>
      <Button {...props} label={'Loading'} isDisabled />
    </ThemeProvider>
  ),
}
