import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@shared/theme'
import { ButtonGroup, Button } from '@shared/ui'

import { defaultArgs, defaultControls, defaultParams } from '../constants'

import type { Meta, StoryObj } from '@storybook/react'
import type { ButtonGroupProps } from '@shared/ui'

export default {
  title:
    'Components/Organisms/ButtonGroup/States/One of the buttons is disabled',
  component: ButtonGroup,
  tags: ['component', 'no-test'],
  args: defaultArgs,
  argTypes: defaultControls,
  parameters: defaultParams,
} satisfies Meta<ButtonGroupProps>

export const OneOfTheButtonDisabled: StoryObj<ButtonGroupProps> = {
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
        <ButtonGroup {...props}>
          <Button label={'Button'} />
          <Button label={'Button'} isDisabled />
          <Button label={'Button'} />
        </ButtonGroup>
      </div>
    </ThemeProvider>
  ),
}
