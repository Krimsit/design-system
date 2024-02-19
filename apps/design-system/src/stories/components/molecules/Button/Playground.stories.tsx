import { Button } from '@shared/ui'

import { defaultArgs, defaultControls, defaultParams } from './constants'

import type { Meta, StoryObj } from '@storybook/react'
import type { ButtonProps } from '@shared/ui'

export default {
  title: 'Components/Molecules/Button',
  component: Button,
  tags: ['component', 'no-test'],
  args: defaultArgs,
  argTypes: defaultControls,
  parameters: defaultParams,
} satisfies Meta<ButtonProps>

export const Playground: StoryObj<ButtonProps> = {
  render: (props) => <Button {...props} />,
}
