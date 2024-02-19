import type { ElementType, SVGProps } from 'react'

export type StyledWrapperProps = {
  $size: number
  $color: string
}

export type IconProps = Omit<
  SVGProps<SVGSVGElement>,
  'color' | 'fill' | 'height' | 'width'
> & {
  icon: ElementType<SVGProps<SVGSVGElement>> // Icon type
  color?: string // Icon hsla color
  className?: string // HTML-attribute class
  size?: number
}

export type IconComponent = ElementType<SVGProps<SVGSVGElement>>
