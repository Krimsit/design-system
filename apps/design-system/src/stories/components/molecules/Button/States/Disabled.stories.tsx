import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@shared/theme'
import { Button } from '@shared/ui'

import { defaultArgs, defaultControls, defaultParams } from '../constants'

import type { Meta, StoryObj } from '@storybook/react'
import type { ButtonProps } from '@shared/ui'

export default {
  title: 'Components/Molecules/Button/States/Disabled',
  component: Button,
  tags: ['component', 'no-test'],
  args: defaultArgs,
  argTypes: {
    ...defaultControls,
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
  },
  parameters: defaultParams,
} satisfies Meta<ButtonProps>

export const Disabled: StoryObj<ButtonProps> = {
  render: (props) => (
    <ThemeProvider theme={lightTheme}>
      <Button {...props} label={'Loading'} isDisabled />
    </ThemeProvider>
  ),
}
