import type { ButtonHTMLAttributes } from 'react'
import type { PressEvent } from '@react-types/shared/src/events'
import type { ButtonIconComponentTheme } from '@shared/theme'
import type { IconComponent } from '@shared/icon'
import type { ButtonColor, ButtonVariant } from '../../atoms'

export type ButtonIconSize = keyof ButtonIconComponentTheme['padding']

export type StyledContainerProps = {
  $size: ButtonIconSize
  $color: ButtonColor
  $variant: ButtonVariant
  $isDisabled: boolean
}

export type ButtonIconProps = {
  /** Button size */
  size?: ButtonIconSize
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
  /** Icon's name */
  icon: IconComponent
}
