import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@shared/theme'
import { Button } from '@shared/ui'

import { defaultArgs, defaultControls, defaultParams } from '../constants'

import type { Meta, StoryObj } from '@storybook/react'
import type { ButtonProps } from '@shared/ui'

export default {
  title: 'Components/Molecules/Button/States/Loading',
  component: Button,
  args: defaultArgs,
  tags: ['component', 'no-test'],
  argTypes: {
    ...defaultControls,
    loading: {
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

export const Loading: StoryObj<ButtonProps> = {
  render: (props) => (
    <ThemeProvider theme={lightTheme}>
      <Button {...props} label={'Loading'} loading />
    </ThemeProvider>
  ),
}
