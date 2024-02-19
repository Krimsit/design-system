import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@shared/theme'
import { ButtonIcon } from '@shared/ui'

import { defaultArgs, defaultControls, defaultParams } from '../constants'

import type { Meta, StoryObj } from '@storybook/react'
import type { ButtonIconProps } from '@shared/ui'

export default {
  title: 'Components/Molecules/ButtonIcon/States/Loading',
  component: ButtonIcon,
  tags: ['component', 'no-test'],
  args: defaultArgs,
  argTypes: {
    ...defaultControls,
    loading: {
      table: {
        disable: true,
      },
    },
  },
  parameters: defaultParams,
} satisfies Meta<ButtonIconProps>

export const Loading: StoryObj<ButtonIconProps> = {
  render: (props) => (
    <ThemeProvider theme={lightTheme}>
      <ButtonIcon {...props} loading />
    </ThemeProvider>
  ),
}
