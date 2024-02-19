import type { SVGProps } from 'react'
import type { IconComponentTheme } from '@shared/theme'
import type { IconComponent } from '@shared/icon'
import type { DeepPartial } from '../../../types'

export type IconSizes = keyof IconComponentTheme['sizes']

export type IconToken = DeepPartial<IconComponentTheme>

export type StyledWrapperProps = {
  $size: IconSizes
  $color: string
}

export type IconProps = Omit<
  SVGProps<SVGSVGElement>,
  'color' | 'fill' | 'height' | 'width'
> & {
  /** SVG element from icons library */
  icon: IconComponent
  /** Icon color */
  color?: string
  /** Icon size */
  size?: IconSizes
  /** HTML-attribute class */
  className?: string
  tokens?: IconToken
}
