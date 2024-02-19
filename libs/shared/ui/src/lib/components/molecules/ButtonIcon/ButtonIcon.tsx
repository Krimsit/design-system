import { useRef } from 'react'
import { useButton } from 'react-aria'

import { Icon } from '../../atoms'

import { StyledContainer } from './ButtonIcon.styles'

import type { FC } from 'react'
import type { ButtonIconProps } from './ButtonIcon.types'

const ButtonIcon: FC<ButtonIconProps> = ({
  size = 'm',
  color = 'primary',
  variant = 'filled',
  loading = false,
  isDisabled = false,
  onPress,
  icon,
  ...otherProps
}) => {
  const disabled = loading || isDisabled
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(
    { isDisabled: disabled, onPress, ...otherProps },
    ref
  )

  return (
    <StyledContainer
      {...buttonProps}
      {...otherProps}
      $color={color}
      $variant={variant}
      $isDisabled={isDisabled}
      $size={size}
    >
      {loading ? 'Loader' : <Icon icon={icon} size={size} />}
    </StyledContainer>
  )
}

export default ButtonIcon
