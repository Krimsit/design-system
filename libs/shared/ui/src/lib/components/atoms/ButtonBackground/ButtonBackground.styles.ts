import styled, { css } from 'styled-components'

import { ButtonColor, ButtonVariant } from './ButtonBackground.types'

const createStateStyle = (color: ButtonColor, variant: ButtonVariant) => css`
  ${({ theme }) => {
    const colors = theme.components.buttonBackground.color[color][variant]

    return css`
      background-color: ${colors.default};
      color: ${colors.text};
      border: 1px solid ${colors.border};
      transition: background-color 0.3s ease;

      svg > path {
        fill: ${colors.text};
      }

      &:hover {
        cursor: pointer;
        background-color: ${colors.hover};
      }

      &:active {
        background-color: ${colors.active};
      }

      &:focus {
        z-index: 2;
        outline-offset: 2px;
        outline: 2px solid ${colors.outline};
      }
    `
  }}
`

const createDisabledStyle = (variant: ButtonVariant) => css`
  ${({ theme }) => {
    const colors = theme.components.buttonBackground.disabled[variant]

    return css`
      background-color: ${colors.background};
      color: ${colors.text};
      border: 1px solid ${colors.border};
    `
  }}
`

export const createButtonBackgroundStyle = (
  color: ButtonColor,
  variant: ButtonVariant,
  isDisabled: boolean
) =>
  isDisabled ? createDisabledStyle(variant) : createStateStyle(color, variant)
