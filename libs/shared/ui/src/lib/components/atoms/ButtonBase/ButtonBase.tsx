import { useRef } from 'react'
import { useButton } from 'react-aria'

import { StyledButtonBase } from './ButtonBase.styles'

import type { PropsWithChildren, FC } from 'react'
import type { ButtonBaseProps } from './ButtonBase.types'

const ButtonBase: FC<PropsWithChildren<ButtonBaseProps>> = ({
  loading,
  children,
  isDisabled,
  onPress,
  ...otherProps
}) => {
  const disabled = loading || isDisabled
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(
    { isDisabled: disabled, onPress, ...otherProps },
    ref,
  )

  return (
    <StyledButtonBase {...buttonProps} {...otherProps}>
      {children}
    </StyledButtonBase>
  )
}

export default ButtonBase
