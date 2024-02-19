import { ReactNode } from 'react'

import TokenItemValue from './TokenItemValue'
import {
  StyledContainer,
  StyledDescription,
  StyledTitle,
  StyledSubtitle,
  StyledItem,
} from './TokenItem.styles'

import type { FC } from 'react'
import type { TokenItemProps } from './TokenItem.types'

const renderValue = (itemValue: TokenItemProps['value']): ReactNode => {
  if (typeof itemValue === 'object') {
    return (
      <StyledItem>
        {Object.keys(itemValue).map((key) => {
          const item = itemValue[key as keyof typeof itemValue]

          return <TokenItemValue key={key} value={item} name={key} />
        })}
      </StyledItem>
    )
  }

  return (
    <StyledItem>
      <TokenItemValue value={itemValue} />
    </StyledItem>
  )
}
const TokenItem: FC<TokenItemProps> = ({ title, subtitle, value }) => {
  return (
    <StyledContainer>
      <StyledDescription>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledDescription>
      {renderValue(value)}
    </StyledContainer>
  )
}

export default TokenItem
