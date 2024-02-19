import {
  StyledItemValue,
  StyledItemValueContainer,
  StyledItemValueText,
} from './TokenItem.styles'

import type { FC } from 'react'
import type { TokenItemValueProps } from './TokenItem.types'

const TokenItemValue: FC<TokenItemValueProps> = ({ value, name }) => {
  const color = !value.includes('px') ? value : undefined
  const width = value.includes('px') ? value : undefined

  return (
    <StyledItemValueContainer>
      <StyledItemValue $color={color} $width={width} />
      {name && <StyledItemValueText>name: {name}</StyledItemValueText>}
      <StyledItemValueText>value: {value}</StyledItemValueText>
    </StyledItemValueContainer>
  )
}

export default TokenItemValue
