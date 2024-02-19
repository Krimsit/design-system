import styled, { css } from 'styled-components'

import type { StyledContainerProps } from './Typography.types'

export const StyledContainer = styled.span<StyledContainerProps>`
  ${({ theme, $variant }) => {
    const font = theme.typography[$variant]

    return css`
      padding: 0;
      margin: 0;
      font: ${font};
    `
  }}
`
