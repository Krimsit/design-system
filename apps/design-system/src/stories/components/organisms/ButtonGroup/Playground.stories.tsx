import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@shared/theme'
import { ButtonGroup, Button } from '@shared/ui'

import { defaultArgs, defaultControls, defaultParams } from './constants'

import type { Meta, StoryObj } from '@storybook/react'
import type { ButtonGroupProps } from '@shared/ui'

export default {
  title: 'Components/Organisms/ButtonGroup',
  component: ButtonGroup,
  tags: ['component', 'no-test'],
  args: defaultArgs,
  argTypes: defaultControls,
  parameters: defaultParams,
} satisfies Meta<ButtonGroupProps>

export const Playground: StoryObj<ButtonGroupProps> = {
  render: (props) => (
    <ThemeProvider theme={lightTheme}>
      <ButtonGroup {...props}>
        <Button label={'First button'} />
        <Button label={'Second button'} />
        <Button label={'Third button'} />
      </ButtonGroup>
    </ThemeProvider>
  ),
}
