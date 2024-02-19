import { Typography } from '@shared/ui'

import type { Meta, StoryObj } from '@storybook/react'
import type { TypographyProps } from '@shared/ui'

export default {
  title: 'Components/Atoms/Typography',
  component: Typography,
  tags: ['component', 'no-test'],
  args: {
    tag: 'span',
    variant: 'body600',
    children: 'Text',
  },
  argTypes: {
    tag: {
      control: 'select',
      options: [
        'dt',
        'dd',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
        'strong',
        'legend',
      ],
    },
    variant: {
      control: 'select',
      options: [
        'head800',
        'head800Medium',
        'head700',
        'head700Medium',
        'head600',
        'head600Medium',
        'head500',
        'head500Medium',
        'display900',
        'display800',
        'display700',
        'body700',
        'body700Medium',
        'body600',
        'body600Medium',
        'body500',
        'body500Medium',
        'body400',
        'body400Medium',
        'body300',
        'body300Medium',
        'label500',
        'label500Medium',
        'label400',
        'label400Medium',
        'label300',
        'label300Medium',
      ],
    },
  },
} satisfies Meta<TypographyProps>

export const Playground: StoryObj<TypographyProps> = {
  render: (props) => <Typography {...props} />,
}
