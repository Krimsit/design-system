import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@shared/theme'
import { ButtonIcon } from '@shared/ui'

import { defaultArgs, defaultControls, defaultParams } from '../constants'

import type { Meta, StoryObj } from '@storybook/react'
import type { ButtonIconProps } from '@shared/ui'

export default {
  title: 'Components/Molecules/ButtonIcon/States/Colors and Variants',
  component: ButtonIcon,
  tags: ['component', 'no-test'],
  args: defaultArgs,
  argTypes: {
    ...defaultControls,
    color: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },
  parameters: defaultParams,
} satisfies Meta<ButtonIconProps>

export const Primary: StoryObj<ButtonIconProps> = {
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
        <ButtonIcon {...props} color={'primary'} variant={'filled'} />
        <ButtonIcon {...props} color={'primary'} variant={'outlined'} />
        <ButtonIcon {...props} color={'primary'} variant={'ghost'} />
      </div>
    </ThemeProvider>
  ),
}

export const Secondary: StoryObj<ButtonIconProps> = {
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
        <ButtonIcon {...props} color={'secondary'} variant={'filled'} />
        <ButtonIcon {...props} color={'secondary'} variant={'outlined'} />
        <ButtonIcon {...props} color={'secondary'} variant={'ghost'} />
      </div>
    </ThemeProvider>
  ),
}

export const Error: StoryObj<ButtonIconProps> = {
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
        <ButtonIcon {...props} color={'error'} variant={'filled'} />
        <ButtonIcon {...props} color={'error'} variant={'outlined'} />
        <ButtonIcon {...props} color={'error'} variant={'ghost'} />
      </div>
    </ThemeProvider>
  ),
}

export const Common: StoryObj<ButtonIconProps> = {
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
        <ButtonIcon {...props} color={'common'} variant={'filled'} />
        <ButtonIcon {...props} color={'common'} variant={'outlined'} />
        <ButtonIcon {...props} color={'common'} variant={'ghost'} />
      </div>
    </ThemeProvider>
  ),
}
