import { Fragment } from 'react'
import { Heading } from '@storybook/blocks'
import * as themesObject from '@shared/theme/objects'

import {
  StyledContainer,
  StyledItem,
  StyledItemTitle,
  StyledItemValue,
} from './Typeset.styles'

import type { FC } from 'react'
import type { ThemeType } from '@shared/theme'

const themes = Object.keys(themesObject).reduce<ThemeType[]>(
  (acc, item) => [...acc, themesObject[item as keyof typeof themesObject]],
  []
)
const theme = themes[1]
const typography = theme.typography
const Typeset: FC = () => (
  <Fragment>
    <Heading>Typography</Heading>
    <StyledContainer>
      {Object.keys(typography).map((item) => (
        <StyledItem key={item}>
          <StyledItemTitle>{item}</StyledItemTitle>
          <StyledItemValue $font={typography[item as keyof typeof typography]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </StyledItemValue>
        </StyledItem>
      ))}
    </StyledContainer>
  </Fragment>
)

export default Typeset
