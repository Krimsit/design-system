import Icon from '@shared/icon'

import { StyledButtonBaseLoader } from '../../atoms'

import { iconSizes } from './Button.constants'
import { StyledButton, StyledButtonLoader } from './Button.styles'

import type { FC } from 'react'
import type { ButtonProps } from './Button.types'

const Button: FC<ButtonProps> = ({
  size = 'm',
  loading = false,
  onPress,
  isDisabled,
  label,
  iconLeft,
  iconRight,
  ...otherProps
}) => {
  const iconSize = iconSizes[size]
  const hasIcon = Boolean(iconRight || iconLeft)

  return (
    <StyledButton
      size={size}
      loading={loading}
      onPress={onPress}
      isDisabled={isDisabled}
      {...otherProps}
    >
      {iconLeft &&
        (loading ? (
          <StyledButtonBaseLoader $size={iconSize} />
        ) : (
          <Icon icon={iconLeft} size={iconSize} />
        ))}
      {label}
      {iconRight &&
        (loading && !iconLeft ? (
          <StyledButtonBaseLoader $size={iconSize} />
        ) : (
          <Icon icon={iconRight} size={iconSize} />
        ))}
      {loading && !hasIcon && <StyledButtonLoader $size={iconSize} />}
    </StyledButton>
  )
}

export default Button
