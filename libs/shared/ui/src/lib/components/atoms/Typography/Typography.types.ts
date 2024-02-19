import { TypographyType } from '@shared/theme'
import { ReactNode } from 'react'

export type TypographyVariant = keyof TypographyType

export type StyledContainerProps = {
  $variant: TypographyVariant
}

export type TypographyElement =
  | 'dt'
  | 'dd'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'strong'
  | 'legend'

export type TypographyProps = {
  /** Typography style variant */
  variant: TypographyVariant
  /** Element tag */
  tag?: TypographyElement
  /** HTML-attribute class */
  className?: string
  /** HTML-attribute tab-index */
  tabIndex?: number
  /** Attribute for e2e testing */
  'data-testid'?: string
  /** Typography content */
  children: ReactNode
}
