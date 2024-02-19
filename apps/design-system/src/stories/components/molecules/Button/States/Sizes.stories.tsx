import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@shared/theme'
import { Button } from '@shared/ui'

import { defaultArgs, defaultControls, defaultParams } from '../constants'

import type { Meta, StoryObj } from '@storybook/react'
import type { ButtonProps } from '@shared/ui'

export default {
  title: 'Components/Molecules/Button/States/Sizes',
  component: Button,
  args: defaultArgs,
  tags: ['component', 'no-test'],
  argTypes: {
    ...defaultControls,
    size: {
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

export const Sizes: StoryObj<ButtonProps> = {
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
        <Button {...props} size={'l'} label={'Large'} />
        <Button {...props} size={'m'} label={'Medium'} />
        <Button {...props} size={'s'} label={'Small'} />
        <Button {...props} size={'xs'} label={'Extra small'} />
      </div>
    </ThemeProvider>
  ),
}
