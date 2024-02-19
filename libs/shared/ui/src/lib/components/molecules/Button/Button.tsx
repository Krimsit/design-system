import { useRef } from 'react'
import { useButton } from 'react-aria'
import { ThemeProvider } from 'styled-components'

import { useMergeTheme } from '../../../hooks'

import { Icon, Typography } from '../../atoms'

import { StyledContainer } from './Button.styles'

import type { FC } from 'react'
import type { TypographyVariant } from '../../atoms'
import type { ButtonProps } from './Button.types'

const Button: FC<ButtonProps> = ({
  size = 'm',
  color = 'primary',
  variant = 'filled',
  loading = false,
  isDisabled = false,
  onPress,
  label,
  iconLeft,
  iconRight,
  tokens,
  ...otherProps
}) => {
  const theme = useMergeTheme(tokens, 'components')
  const disabled = loading || isDisabled
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(
    { isDisabled: disabled, onPress, ...otherProps },
    ref
  )
  const hasIcon = Boolean(iconRight || iconLeft)
  const fontVariant: TypographyVariant =
    size === 'xs' ? 'body400Medium' : 'body600Medium'

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer
        {...buttonProps}
        {...otherProps}
        $color={color}
        $variant={variant}
        $isDisabled={isDisabled}
        $size={size}
      >
        {iconLeft &&
          (loading ? 'Loader' : <Icon icon={iconLeft} size={size} />)}
        <Typography tag={'h6'} variant={fontVariant}>
          {label}
        </Typography>
        {iconRight &&
          (loading && !iconLeft ? (
            'Loader'
          ) : (
            <Icon icon={iconRight} size={size} />
          ))}
        {loading && !hasIcon && 'Loader'}
      </StyledContainer>
    </ThemeProvider>
  )
}

export default Button
