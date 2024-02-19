import { StyledWrapper } from './Icon.styles'

import type { IconProps } from './Icon.types'
import type { FC } from 'react'

const Icon: FC<IconProps> = ({
  icon: IconTag,
  className,
  color = 'currentColor',
  size = 18,
  ...svgProps
}) => (
  <StyledWrapper $size={size} $color={color} className={className}>
    <IconTag width={size} height={size} {...svgProps} fill={'currentColor'} />
  </StyledWrapper>
)

export default Icon
