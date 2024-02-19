import styled from 'styled-components'

import {
  ButtonBase,
  createButtonStyles,
  StyledButtonBaseLoader,
} from '../../atoms'

export const StyledButtonLoader = styled(StyledButtonBaseLoader)`
  position: absolute;
  inset: 0;
  margin: auto;
`

export const StyledButton = styled(ButtonBase)`
  ${({
    size = 'm',
    loading = false,
    isDisabled,
    color = 'primary',
    variant = 'filled',
  }) => {
    const isDisabledStyles = isDisabled || loading

    return createButtonStyles(color, variant, size, isDisabledStyles)
  }}
`
