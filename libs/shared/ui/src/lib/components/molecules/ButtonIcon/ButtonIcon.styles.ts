import styled, { css } from 'styled-components'

import { createButtonBackgroundStyle } from '../../atoms'

import { StyledContainerProps } from './ButtonIcon.types'

export const StyledContainer = styled.button<StyledContainerProps>`
  ${({ theme, $size, $color, $variant, $isDisabled }) => {
    const { borderRadius, padding } = theme.components.buttonIcon
    const { horizontal, vertical } = padding[$size]

    return css`
      display: flex;
      align-items: center;
      border-radius: ${borderRadius};
      padding: ${vertical} ${horizontal};
      ${createButtonBackgroundStyle($color, $variant, $isDisabled)}
    `
  }}
`
