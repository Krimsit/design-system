import styled, { css } from 'styled-components'

import type { StyledWrapperProps } from './Icon.types'

export const StyledWrapper = styled.div<StyledWrapperProps>`
  ${({ theme, $color, $size }) => {
    const size = theme.components.icon.sizes[$size]

    return css`
      color: ${$color};
      width: ${size};
      height: ${size};
    `
  }}
`
