import { useButtonGroupLogic } from './ButtonGroup.hooks'
import { ButtonGroupContainer } from './ButtonGroup.styles'

import type { FC } from 'react'
import type { ButtonGroupProps } from './ButtonGroup.types'

const ButtonGroup: FC<ButtonGroupProps> = ({ children, size = 'm' }) => {
  const { buttons, handleKeyDown } = useButtonGroupLogic({ children, size })

  return (
    <ButtonGroupContainer onKeyDown={handleKeyDown}>
      {buttons}
    </ButtonGroupContainer>
  )
}

export default ButtonGroup
