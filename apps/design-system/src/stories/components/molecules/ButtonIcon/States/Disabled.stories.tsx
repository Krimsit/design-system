import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@shared/theme'
import { ButtonIcon } from '@shared/ui'

import { defaultArgs, defaultControls, defaultParams } from '../constants'

import type { Meta, StoryObj } from '@storybook/react'
import type { ButtonIconProps } from '@shared/ui'

export default {
  title: 'Components/Molecules/ButtonIcon/States/Disabled',
  component: ButtonIcon,
  tags: ['component', 'no-test'],
  args: defaultArgs,
  argTypes: {
    ...defaultControls,
    isDisabled: {
      table: {
        disable: true,
      },
    },
  },
  parameters: defaultParams,
} satisfies Meta<ButtonIconProps>

export const Disabled: StoryObj<ButtonIconProps> = {
  render: (props) => (
    <ThemeProvider theme={lightTheme}>
      <ButtonIcon {...props} isDisabled />
    </ThemeProvider>
  ),
}
