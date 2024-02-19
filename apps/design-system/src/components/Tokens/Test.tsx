import React from 'react'
import { transparentize } from 'polished'
import { styled } from '@storybook/theming'

import type { Theme } from '@storybook/theming'
import type { FunctionComponent } from 'react'

export const getBlockBackgroundStyle: (
  theme: Theme,
  isSize?: boolean,
) => object = (theme: Theme, isSize?: boolean) => ({
  borderRadius: theme.appBorderRadius,
  background: theme.background.content,
  boxShadow: !isSize ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0' : '',
  border: !isSize ? `1px solid ${theme.appBorderColor}` : '',
})

const ItemTitle = styled.div(({ theme }) => ({
  fontWeight: theme.typography.weight.bold,
  color: theme.color.defaultText,
}))
const ItemSubtitle = styled.div(({ theme }) => ({
  color: transparentize(0.2, theme.color.defaultText),
}))
const ItemDescription = styled.div({
  flex: '0 0 30%',
  lineHeight: '20px',
  marginTop: 5,
})
const SwatchLabel = styled.div(({ theme }) => ({
  flex: 1,
  textAlign: 'center',
  fontFamily: theme.typography.fonts.mono,
  fontSize: theme.typography.size.s1,
  lineHeight: 1,
  overflow: 'hidden',
  color: transparentize(0.4, theme.color.defaultText),

  '> div': {
    display: 'inline-block',
    overflow: 'hidden',
    maxWidth: '100%',
    textOverflow: 'ellipsis',
  },

  span: {
    display: 'block',
    marginTop: 2,
  },
}))
const SwatchLabels = styled.div({
  display: 'flex',
  flexDirection: 'row',
})

interface SwatchProps {
  background: string
}

const Swatch = styled.div<SwatchProps & { isSize?: boolean }>(
  ({ background }) => ({
    position: 'relative',
    flex: 1,

    '&::before': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background,
      content: '""',
    },
  }),
)
const SwatchColors = styled.div<{ isSize?: boolean }>(({ theme, isSize }) => ({
  ...getBlockBackgroundStyle(theme, isSize),
  display: 'flex',
  flexDirection: 'row',
  height: !isSize ? 50 : 0,
  marginBottom: 5,
  overflow: 'hidden',
  backgroundColor: 'white',
  backgroundImage: `repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)`,
  backgroundClip: 'padding-box',
}))
const SwatchSpecimen = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  position: 'relative',
  marginBottom: 30,
})
const Swatches = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
})
const Item = styled.div({
  display: 'flex',
  alignItems: 'flex-start',
})

type Colors = string[] | { [key: string]: string }

interface ColorItemProps {
  title: string
  subtitle: string
  colors: Colors
}

function renderSwatch(color: string, index: number) {
  return <Swatch key={`${color}-${index}`} title={color} background={color} />
}

function renderSwatchLabel(
  color: string,
  index: number,
  colorDescription?: string,
) {
  return (
    <SwatchLabel key={`${color}-${index}`} title={color}>
      <div>
        {color}
        {colorDescription && <span>{colorDescription}</span>}
      </div>
    </SwatchLabel>
  )
}

function renderSwatchSpecimen(colors: Colors) {
  if (Array.isArray(colors)) {
    return (
      <SwatchSpecimen>
        <SwatchColors isSize={colors.some((item) => item.includes('px'))}>
          {colors.map((color, index) => renderSwatch(color, index))}
        </SwatchColors>
        <SwatchLabels>
          {colors.map((color, index) => renderSwatchLabel(color, index))}
        </SwatchLabels>
      </SwatchSpecimen>
    )
  }

  const swatchElements = []
  const labelElements = []
  let isSize = false

  for (const colorKey in colors) {
    const colorValue = colors[colorKey]

    isSize = colorValue.includes('px')

    swatchElements.push(renderSwatch(colorValue, swatchElements.length))
    labelElements.push(
      renderSwatchLabel(colorKey, labelElements.length, colorValue),
    )
  }

  return (
    <SwatchSpecimen>
      <SwatchColors isSize={isSize}>{swatchElements}</SwatchColors>
      <SwatchLabels>{labelElements}</SwatchLabels>
    </SwatchSpecimen>
  )
}

export const ColorItem: FunctionComponent<ColorItemProps> = ({
  title,
  subtitle,
  colors,
}) => (
  <Item>
    <ItemDescription>
      <ItemTitle>{title}</ItemTitle>
      <ItemSubtitle>{subtitle}</ItemSubtitle>
    </ItemDescription>
    <Swatches>{renderSwatchSpecimen(colors)}</Swatches>
  </Item>
)
