import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@shared/theme'
import { ButtonIcon } from '@shared/ui'

import { defaultArgs, defaultControls, defaultParams } from './constants'

import type { Meta, StoryObj } from '@storybook/react'
import type { ButtonIconProps } from '@shared/ui'

export default {
  title: 'Components/Molecules/ButtonIcon',
  component: ButtonIcon,
  tags: ['component', 'no-test'],
  args: defaultArgs,
  argTypes: defaultControls,
  parameters: defaultParams,
} satisfies Meta<ButtonIconProps>

export const Playground: StoryObj<ButtonIconProps> = {
  render: (props) => (
    <ThemeProvider theme={lightTheme}>
      <ButtonIcon {...props} />
    </ThemeProvider>
  ),
}
