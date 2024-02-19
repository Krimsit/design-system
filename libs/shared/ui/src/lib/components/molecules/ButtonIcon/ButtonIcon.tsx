import Icon from '@shared/icon'

import { StyledButtonBaseLoader } from '../../atoms'

import { StyledButtonIcon } from './ButtonIcon.styles'
import { iconSizes } from './ButtonIcon.constants'

import type { FC } from 'react'
import type { ButtonIconProps } from './ButtonIcon.types'

const ButtonIcon: FC<ButtonIconProps> = ({
  size = 'm',
  loading = false,
  onPress,
  isDisabled,
  icon,
  ...otherProps
}) => {
  const iconSize = iconSizes[size]

  return (
    <StyledButtonIcon
      size={size}
      loading={loading}
      onPress={onPress}
      isDisabled={isDisabled}
      {...otherProps}
    >
      {loading ? (
        <StyledButtonBaseLoader $size={iconSize} />
      ) : (
        <Icon icon={icon} size={iconSize} />
      )}
    </StyledButtonIcon>
  )
}

export default ButtonIcon
