import type { ReactElement } from 'react'
import type { ButtonSizes } from '../../atoms'
import type { ButtonProps } from '../Button'

export type ButtonChild = ReactElement<ButtonProps>

export type ButtonGroupProps = {
  size: ButtonSizes
  children: ButtonChild | ButtonChild[]
}
