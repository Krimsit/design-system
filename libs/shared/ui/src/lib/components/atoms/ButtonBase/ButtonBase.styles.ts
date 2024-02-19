import styled, { css, keyframes } from 'styled-components'

import type {
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from 'styled-components'
import type {
  StyledButtonBaseLoaderProps,
  ButtonColors,
  ButtonSizes,
  ButtonVariants,
} from './ButtonBase.types'

export const createButtonStateStyle = (
  color: ButtonColors,
  variant: ButtonVariants
) => css`
  ${({ theme }) => {
    const colors = theme.components.button.color[color][variant]

    return css`
      background-color: ${colors.default};
      color: ${colors.text};
      border: 1px solid ${colors.border};

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

export const createButtonDisabledStyle = (variant: ButtonVariants) => css`
  ${({ theme }) => {
    const colors = theme.components.button.disabled[variant]

    return css`
      background-color: ${colors.background};
      color: ${colors.text};
      border: 1px solid ${colors.border};
    `
  }}
`

const buttonFontVariants: Record<
  ButtonSizes,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  l: css`
    ${({ theme }) => {
      const { body } = theme.typography

      return css`
        font: ${body['600Medium']};
      `
    }}
  `,
  m: css`
    ${({ theme }) => {
      const { body } = theme.typography

      return css`
        font: ${body['600Medium']};
      `
    }}
  `,
  s: css`
    ${({ theme }) => {
      const { body } = theme.typography

      return css`
        font: ${body['600Medium']};
      `
    }}
  `,
  xs: css`
    ${({ theme }) => {
      const { body } = theme.typography

      return css`
        font: ${body['300Medium']};
      `
    }}
  `,
}

export const createButtonSizeStyles = (size: ButtonSizes) => css`
  ${({ theme }) => {
    const { horizontal, vertical } = theme.components.button.sizes[size]

    return css`
      padding: ${vertical} ${horizontal};
    `
  }}
`

export const createButtonStyles = (
  buttonColor: ButtonColors,
  buttonVariant: ButtonVariants,
  buttonSize: ButtonSizes,
  isDisabled?: boolean
) => css`
  ${({ theme }) => {
    const { borderRadius, gap } = theme.components.button
    const font = buttonFontVariants[buttonSize]

    return css`
      display: flex;
      align-items: center;
      box-sizing: border-box;
      gap: ${gap};
      border-radius: ${borderRadius};
      transition: background-color 0.3s ease;
      ${font};
      ${createButtonSizeStyles(buttonSize)};

      ${isDisabled
        ? createButtonDisabledStyle(buttonVariant)
        : createButtonStateStyle(buttonColor, buttonVariant)}
    `
  }}
`

export const StyledButtonBaseLoader = styled.div<StyledButtonBaseLoaderProps>`
  ${({ $size, theme, $variant = 'filled' }) => {
    const { text } = theme.components.button.disabled[$variant]
    const rotation = keyframes`
      100% {
        transform: rotate(360deg);
      }
    `

    return css`
      box-sizing: border-box;
      width: ${$size}px;
      height: ${$size}px;
      border-radius: 50%;
      border: 2px solid ${text};
      border-bottom-color: transparent;
      animation: ${rotation} 2s linear infinite;
    `
  }}
`

export const StyledButtonBase = styled.button`
  position: relative;
`
