import type { ButtonHTMLAttributes } from 'react'
import type { PressEvent } from '@react-types/shared/src/events'
import type { ButtonComponentTheme } from '@shared/theme'

export type ButtonSizes = keyof ButtonComponentTheme['sizes']

export type ButtonColors = keyof ButtonComponentTheme['color']

export type ButtonVariants = keyof ButtonComponentTheme['color']['primary']

export type StyledButtonBaseLoaderProps = {
  $size: number
  $variant?: ButtonVariants
}

type ButtonThemes = {
  color?: ButtonColors
  variant?: ButtonVariants
}

type ButtonBaseThemes = ButtonThemes

export type ButtonBaseProps = ButtonBaseThemes & {
  /** Button size */
  size?: ButtonSizes
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
}
