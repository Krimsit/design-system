import styled, { css } from 'styled-components'

import type { StyledWrapperProps } from './Icon.types'

export const StyledWrapper = styled.div<StyledWrapperProps>`
  ${({ $color, $size }) => css`
    color: ${$color};
    width: ${$size}px;
    height: ${$size}px;
  `}
`
