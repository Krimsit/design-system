import { ThemeProvider } from 'styled-components'
import { within, userEvent } from '@storybook/testing-library'
import { jest, expect } from '@storybook/jest'
import { lightTheme } from '@shared/theme'
import { Button } from '@shared/ui'

import { defaultArgs, defaultControls, defaultParams } from './constants'

import type { Meta, StoryObj } from '@storybook/react'
import type { ButtonProps } from '@shared/ui'

export default {
  title: 'Components/Molecules/Button/Tests',
  component: Button,
  tags: ['component', 'test-only'],
  args: {
    ...defaultArgs,
    'data-testid': 'button',
  },
  argTypes: defaultControls,
  parameters: defaultParams,
} satisfies Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
  args: {
    ...defaultArgs,
    onPress: jest.fn(() => console.log('Clicked!)')),
  },
  argTypes: {
    onPress: {
      action: true,
      table: {
        disable: true,
      },
    },
  },
  render: (props) => (
    <ThemeProvider theme={lightTheme}>
      <Button {...props} />
    </ThemeProvider>
  ),
  async play({ canvasElement, args, step }) {
    const canvas = within(canvasElement)

    await step('onPress called by click', async () => {
      await userEvent.click(canvas.getByTestId('button'))

      await expect(args.onPress).toHaveBeenCalled()
    })

    await step('onPress called by tab + enter', async () => {
      await userEvent.tab()

      await userEvent.keyboard('{enter}')

      await expect(args.onPress).toHaveBeenCalled()
    })
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    ...defaultArgs,
    onPress: jest.fn(() => console.log('Clicked!)')),
    isDisabled: true,
  },
  render: (props) => (
    <ThemeProvider theme={lightTheme}>
      <Button {...props} />
    </ThemeProvider>
  ),
  async play({ canvasElement, args, step }) {
    const canvas = within(canvasElement)

    await step('onPress does not called by click', async () => {
      await userEvent.click(canvas.getByTestId('button'))

      await expect(args.onPress).not.toHaveBeenCalled()
    })

    await step('onPress does not called by tab + enter', async () => {
      await userEvent.tab()

      await userEvent.keyboard('{enter}')

      await expect(args.onPress).not.toHaveBeenCalled()
    })
  },
}

export const Loading: StoryObj<ButtonProps> = {
  args: {
    ...defaultArgs,
    onPress: jest.fn(() => console.log('Clicked!)')),
    loading: true,
  },
  render: (props) => (
    <ThemeProvider theme={lightTheme}>
      <Button {...props} />
    </ThemeProvider>
  ),
  async play({ canvasElement, args, step }) {
    const canvas = within(canvasElement)

    await step('onPress does not called by click', async () => {
      await userEvent.click(canvas.getByTestId('button'))

      await expect(args.onPress).not.toHaveBeenCalled()
    })

    await step('onPress does not called by tab + enter', async () => {
      await userEvent.tab()

      await userEvent.keyboard('{enter}')

      await expect(args.onPress).not.toHaveBeenCalled()
    })
  },
}
