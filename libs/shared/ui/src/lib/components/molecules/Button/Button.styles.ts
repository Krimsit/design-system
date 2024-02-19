import styled, { css } from 'styled-components'

import { createButtonBackgroundStyle } from '../../atoms'

import { StyledContainerProps } from './Button.types'

export const StyledContainer = styled.button<StyledContainerProps>`
  ${({ theme, $size, $color, $variant, $isDisabled }) => {
    const { gap, borderRadius, padding } = theme.components.button
    const { horizontal, vertical } = padding[$size]

    return css`
      display: flex;
      align-items: center;
      gap: ${gap};
      border-radius: ${borderRadius};
      padding: ${vertical} ${horizontal};
      ${createButtonBackgroundStyle($color, $variant, $isDisabled)}
    `
  }}
`
