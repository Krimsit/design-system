import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@shared/theme'
import { ButtonIcon } from '@shared/ui'

import { defaultArgs, defaultControls, defaultParams } from '../constants'

import type { Meta, StoryObj } from '@storybook/react'
import type { ButtonIconProps } from '@shared/ui'

export default {
  title: 'Components/Molecules/ButtonIcon/States/Sizes',
  component: ButtonIcon,
  tags: ['component', 'no-test'],
  args: defaultArgs,
  argTypes: {
    ...defaultControls,
    size: {
      table: {
        disable: true,
      },
    },
  },
  parameters: defaultParams,
} satisfies Meta<ButtonIconProps>

export const Sizes: StoryObj<ButtonIconProps> = {
  render: (props) => (
    <ThemeProvider theme={lightTheme}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <ButtonIcon {...props} size={'l'} />
        <ButtonIcon {...props} size={'m'} />
        <ButtonIcon {...props} size={'s'} />
        <ButtonIcon {...props} size={'xs'} />
      </div>
    </ThemeProvider>
  ),
}
