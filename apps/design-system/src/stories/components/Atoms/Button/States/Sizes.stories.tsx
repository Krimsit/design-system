import { ThemeProvider } from 'styled-components'
import { Button } from '@shared/ui'
import { FilledActionAndroid, FilledActionArrowRightAlt } from '@shared/icons'
import { lightTheme } from '@shared/theme'
import { action } from '@storybook/addon-actions'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Atoms/Button/States/Sizes',
  component: Button,
  args: {
    color: 'primary',
    variant: 'filled',
    iconLeft: FilledActionAndroid,
    iconRight: FilledActionArrowRightAlt,
    loading: false,
    isDisabled: false,
    onPress: action('onPress'),
  },
  argTypes: {
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
    onPress: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Button>

export const Sizes: StoryObj<typeof Button> = {
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
