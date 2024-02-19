import styled from 'styled-components'

import { ButtonBase, createButtonStyles } from '../../atoms'

export const StyledButtonIcon = styled(ButtonBase)`
  ${({
    color = 'primary',
    variant = 'filled',
    size = 'm',
    loading = false,
    isDisabled,
  }) => {
    const isDisabledStyles = isDisabled || loading

    return createButtonStyles(
      color,
      variant,
      size,
      isDisabledStyles,
    )
  }}
`
