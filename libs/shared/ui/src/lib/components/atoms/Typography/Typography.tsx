import { StyledContainer } from './Typography.styles'

import type { FC, PropsWithChildren } from 'react'
import type { TypographyProps } from './Typography.types'

const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  tag = 'span',
  variant,
  children,
  ...otherProps
}) => (
  <StyledContainer {...otherProps} as={tag} $variant={variant}>
    {children}
  </StyledContainer>
)

export default Typography
