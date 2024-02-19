import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@shared/theme'
import { ButtonGroup, Button } from '@shared/ui'

import { defaultArgs, defaultControls, defaultParams } from '../constants'

import type { Meta, StoryObj } from '@storybook/react'
import type { ButtonGroupProps } from '@shared/ui'

export default {
  title: 'Components/Organisms/ButtonGroup/States/Sizes',
  component: ButtonGroup,
  args: defaultArgs,
  tags: ['component', 'no-test'],
  argTypes: {
    ...defaultControls,
    size: {
      table: {
        disable: true,
      },
    },
  },
  parameters: defaultParams,
} satisfies Meta<ButtonGroupProps>

export const Sizes: StoryObj<ButtonGroupProps> = {
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
        <ButtonGroup {...props} size={'l'}>
          <Button label={'L First button'} />
          <Button label={'L Second button'} />
          <Button label={'L Third button'} />
        </ButtonGroup>
        <ButtonGroup {...props} size={'m'}>
          <Button label={'M First button'} />
          <Button label={'M Second button'} />
          <Button label={'M Third button'} />
        </ButtonGroup>
        <ButtonGroup {...props} size={'s'}>
          <Button label={'S First button'} />
          <Button label={'S Second button'} />
          <Button label={'S Third button'} />
        </ButtonGroup>
        <ButtonGroup {...props} size={'xs'}>
          <Button label={'XS First button'} />
          <Button label={'XS Second button'} />
          <Button label={'XS Third button'} />
        </ButtonGroup>
      </div>
    </ThemeProvider>
  ),
}
