import { ThemeProvider } from 'styled-components'
import { within, userEvent } from '@storybook/testing-library'
import { jest, expect } from '@storybook/jest'
import { lightTheme } from '@shared/theme'
import { Button, ButtonGroup } from '@shared/ui'

import { defaultArgs, defaultControls, defaultParams } from './constants'

import type { Meta, StoryObj } from '@storybook/react'
import type { ButtonGroupProps } from '@shared/ui'

export default {
  title: 'Components/Organisms/ButtonGroup/Tests',
  component: ButtonGroup,
  tags: ['component', 'test-only'],
  args: defaultArgs,
  argTypes: defaultControls,
  parameters: defaultParams,
} satisfies Meta<ButtonGroupProps>

export const Default: StoryObj<ButtonGroupProps> = {
  render: (props) => (
    <ThemeProvider theme={lightTheme}>
      <ButtonGroup {...props}>
        <Button label={'First button'} data-testid={'first-button'} />
        <Button label={'Second button'} data-testid={'second-button'} />
        <Button label={'Third button'} data-testid={'third-button'} />
      </ButtonGroup>
    </ThemeProvider>
  ),
  async play({ canvasElement, args, step }) {
    const canvas = within(canvasElement)
    const firstButton = canvas.getByTestId('first-button')
    const secondButton = canvas.getByTestId('second-button')
    const thirdButton = canvas.getByTestId('third-button')
    const firstButtonCall = jest.fn(() => console.log('First button clicked!)'))
    const secondButtonCall = jest.fn(() =>
      console.log('Second button clicked!)')
    )
    const thirdButtonCall = jest.fn(() => console.log('Third button clicked!)'))

    firstButton.onclick = firstButtonCall
    secondButton.onclick = secondButtonCall
    thirdButton.onclick = thirdButtonCall

    await step('First button pressed', async () => {
      await userEvent.click(firstButton)

      await expect(firstButtonCall.mock.calls.length).toEqual(1)
    })

    await step('Second button pressed', async () => {
      await userEvent.click(secondButton)

      await expect(secondButtonCall.mock.calls.length).toEqual(1)
    })

    await step('Third button pressed', async () => {
      await userEvent.click(thirdButton)

      await expect(thirdButtonCall.mock.calls.length).toEqual(1)
    })

    await step('All buttons onPress called by enter', async () => {
      await userEvent.tab()

      await userEvent.keyboard('{enter}')

      await expect(firstButtonCall.mock.calls.length).toEqual(1)

      await userEvent.tab()

      await userEvent.keyboard('{enter}')

      await expect(secondButtonCall.mock.calls.length).toEqual(1)

      await userEvent.tab()

      await userEvent.keyboard('{enter}')

      await expect(thirdButtonCall.mock.calls.length).toEqual(1)
    })
  },
}

export const OneOfTheButtonDisabled: StoryObj<ButtonGroupProps> = {
  render: (props) => (
    <ThemeProvider theme={lightTheme}>
      <ButtonGroup {...props}>
        <Button label={'First button'} data-testid={'first-button'} />
        <Button
          label={'Disabled button'}
          data-testid={'disabled-button'}
          isDisabled
        />
        <Button label={'Third button'} data-testid={'third-button'} />
      </ButtonGroup>
    </ThemeProvider>
  ),
  async play({ canvasElement, args, step }) {
    const canvas = within(canvasElement)
    const firstButton = canvas.getByTestId('first-button')
    const disabledButton = canvas.getByTestId('disabled-button')
    const thirdButton = canvas.getByTestId('third-button')
    const firstButtonCall = jest.fn(() => console.log('First button clicked!)'))
    const disabledButtonCall = jest.fn(() =>
      console.log('Disabled button clicked!)')
    )
    const thirdButtonCall = jest.fn(() => console.log('Third button clicked!)'))

    firstButton.onclick = firstButtonCall
    disabledButton.onclick = disabledButtonCall
    thirdButton.onclick = thirdButtonCall

    await step('First button pressed', async () => {
      await userEvent.click(firstButton)

      await expect(firstButtonCall.mock.calls.length).toEqual(1)
    })

    await step('Disabled button is not pressed', async () => {
      await userEvent.click(disabledButton)

      await expect(disabledButtonCall.mock.calls.length).toEqual(0)
    })

    await step('Third button pressed', async () => {
      await userEvent.click(thirdButton)

      await expect(thirdButtonCall.mock.calls.length).toEqual(1)
    })

    await step(
      'All buttons onPress called by enter and disabled button skipped',
      async () => {
        await userEvent.tab()

        await userEvent.keyboard('{enter}')

        await expect(firstButtonCall.mock.calls.length).toEqual(1)

        await userEvent.tab()

        await userEvent.keyboard('{enter}')

        await expect(thirdButtonCall.mock.calls.length).toEqual(1)
      }
    )
  },
}
