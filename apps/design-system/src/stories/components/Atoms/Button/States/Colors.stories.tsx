import { ThemeProvider } from 'styled-components'
import { Button } from '@shared/ui'
import { FilledActionAndroid, FilledActionArrowRightAlt } from '@shared/icons'
import { lightTheme } from '@shared/theme'
import { action } from '@storybook/addon-actions'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Atoms/Button/States/Colors and Variants',
  component: Button,
  args: {
    size: 'm',
    iconLeft: FilledActionAndroid,
    iconRight: FilledActionArrowRightAlt,
    loading: false,
    isDisabled: false,
    onPress: action('onPress'),
  },
  argTypes: {
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

export const Primary: StoryObj<typeof Button> = {
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
        <Button
          {...props}
          color={'primary'}
          variant={'filled'}
          label={'Primary filled'}
        />
        <Button
          {...props}
          color={'primary'}
          variant={'outlined'}
          label={'Primary outlined'}
        />
        <Button
          {...props}
          color={'primary'}
          variant={'ghost'}
          label={'Primary ghost'}
        />
      </div>
    </ThemeProvider>
  ),
}

export const Secondary: StoryObj<typeof Button> = {
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
        <Button
          {...props}
          color={'secondary'}
          variant={'filled'}
          label={'Secondary filled'}
        />
        <Button
          {...props}
          color={'secondary'}
          variant={'outlined'}
          label={'Secondary outlined'}
        />
        <Button
          {...props}
          color={'secondary'}
          variant={'ghost'}
          label={'Secondary ghost'}
        />
      </div>
    </ThemeProvider>
  ),
}

export const Error: StoryObj<typeof Button> = {
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
        <Button
          {...props}
          color={'error'}
          variant={'filled'}
          label={'Error filled'}
        />
        <Button
          {...props}
          color={'error'}
          variant={'outlined'}
          label={'Error outlined'}
        />
        <Button
          {...props}
          color={'error'}
          variant={'ghost'}
          label={'Error ghost'}
        />
      </div>
    </ThemeProvider>
  ),
}

export const Common: StoryObj<typeof Button> = {
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
        <Button
          {...props}
          color={'common'}
          variant={'filled'}
          label={'Common filled'}
        />
        <Button
          {...props}
          color={'common'}
          variant={'outlined'}
          label={'Common outlined'}
        />
        <Button
          {...props}
          color={'common'}
          variant={'ghost'}
          label={'Common ghost'}
        />
      </div>
    </ThemeProvider>
  ),
}
