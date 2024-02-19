import type { ReactElement } from 'react'
import type { ButtonProps, ButtonSize } from '../../molecules'

export type ButtonChild = ReactElement<ButtonProps>

export type ButtonGroupProps = {
  size: ButtonSize
  children: ButtonChild | ButtonChild[]
}
