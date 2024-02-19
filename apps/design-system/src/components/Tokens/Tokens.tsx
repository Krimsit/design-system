import { Fragment } from 'react'
import { Heading, Subheading } from '@storybook/blocks'
import * as themesObject from '@shared/theme/objects'

import { getValueFromObject } from '../utils'

import { TokenItem } from './TokenItem'
import { StyledItemsContainer } from './Tokens.styles'

import type { FC, ReactNode } from 'react'
import type { ThemeType } from '@shared/theme'
import type { TokensProps } from './Tokens.types'

const themes = Object.keys(themesObject).reduce<ThemeType[]>(
  (acc, item) => [...acc, themesObject[item as keyof typeof themesObject]],
  []
)
const theme = themes[1]
const renderTokens = (tokens: object, parentKey: string): ReactNode =>
  Object.keys(tokens).map((key) => {
    const originalKey = `${parentKey ? `${parentKey}.` : ''}${key}`
    const tokenItem = tokens[key as keyof typeof tokens]

    if (typeof Object.values(tokenItem)[0] === 'string') {
      return (
        <TokenItem
          key={key}
          value={tokenItem}
          subtitle={originalKey}
          title={key}
        />
      )
    }

    return (
      <StyledItemsContainer key={key}>
        <Subheading>{key}</Subheading>
        {renderTokens(tokenItem, originalKey)}
      </StyledItemsContainer>
    )
  })
const Tokens: FC<TokensProps> = ({ tokenField, title }) => {
  const fieldForRender = getValueFromObject(theme, tokenField)

  return (
    <Fragment>
      <Heading>{title}</Heading>
      <StyledItemsContainer>
        {renderTokens(fieldForRender, `theme.${tokenField}`)}
      </StyledItemsContainer>
    </Fragment>
  )
}

export default Tokens
