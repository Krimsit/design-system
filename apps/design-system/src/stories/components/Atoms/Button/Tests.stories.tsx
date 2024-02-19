import { ThemeProvider } from 'styled-components'
import { within, userEvent } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'
import { Button } from '@shared/ui'
import { lightTheme } from '@shared/theme'
import { FilledActionAndroid, FilledActionArrowRightAlt } from '@shared/icons'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Atoms/Button/Tests',
  component: Button,
  tags: ['components'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XqZnq2zfxk89JJcOsyTVG4/Altenar-UI?type=design&node-id=3030-57931&mode=design&t=4NinxkjEW0uIc2FG-4',
    },
  },
} satisfies Meta<typeof Button>

export const Default: StoryObj<typeof Button> = {
  args: {
    color: 'primary',
    variant: 'filled',
    size: 'm',
    iconLeft: FilledActionAndroid,
    iconRight: FilledActionArrowRightAlt,
    label: 'Button',
    'data-testid': 'button',
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

export const Disabled: StoryObj<typeof Button> = {
  args: {
    color: 'primary',
    variant: 'filled',
    size: 'm',
    iconLeft: FilledActionAndroid,
    iconRight: FilledActionArrowRightAlt,
    label: 'Button',
    'data-testid': 'button',
    onPress: jest.fn(() => console.log('Clicked!)')),
    isDisabled: true,
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

export const Loading: StoryObj<typeof Button> = {
  args: {
    color: 'primary',
    variant: 'filled',
    size: 'm',
    iconLeft: FilledActionAndroid,
    iconRight: FilledActionArrowRightAlt,
    label: 'Button',
    'data-testid': 'button',
    onPress: jest.fn(() => console.log('Clicked!)')),
    loading: true,
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
