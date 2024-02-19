import type { ButtonHTMLAttributes } from 'react'
import type { PressEvent } from '@react-types/shared/src/events'
import type { ButtonComponentTheme } from '@shared/theme'
import type { IconComponent } from '@shared/icon'
import type { DeepPartial } from '../../../types'
import type {
  ButtonVariant,
  ButtonColor,
  ButtonBackgroundToken,
  IconToken,
} from '../../atoms'

export type ButtonSize = keyof ButtonComponentTheme['padding']

export type StyledContainerProps = {
  $size: ButtonSize
  $color: ButtonColor
  $variant: ButtonVariant
  $isDisabled: boolean
}

export type ButtonToken = DeepPartial<{
  buttonBackground: ButtonBackgroundToken
  icon: IconToken
  button: ButtonComponentTheme
}>

export type ButtonProps = {
  /** Button size */
  size?: ButtonSize
  /** Button color */
  color?: ButtonColor
  /** Button variant */
  variant?: ButtonVariant
  /** Shows loading state */
  loading?: boolean
  /** HTML-attribute class */
  className?: string
  /** HTML-attribute tab-index */
  tabIndex?: number
  /** Attribute for e2e testing */
  'data-testid'?: string
  /** Click callback handler */
  onPress?: (e: PressEvent) => void
  /** Shows disabling state */
  isDisabled?: boolean
  /** HTML-attribute aria-label */
  'aria-label'?: string
  /** HTML-attribute id */
  id?: string
  /** HTML-attribute type */
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  /** Icon to display inside left */
  iconLeft?: IconComponent
  /** Icon to display inside right */
  iconRight?: IconComponent
  /** Button text */
  label: string
  tokens?: ButtonToken
}
