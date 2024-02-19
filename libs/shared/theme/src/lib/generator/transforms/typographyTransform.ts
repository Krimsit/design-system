import type { Core } from 'style-dictionary'
import type { TypographyVariableValue } from '../types'

const fontWeightsWithStyles = {
  thin: 'normal 100',
  'extra-light': 'normal 200',
  light: 'normal 300',
  regular: 'normal 400',
  medium: 'normal 500',
  'semi-bold': 'normal 600',
  bold: 'normal 700',
  'extra-bold': 'normal 800',
  black: 'normal 900',
  'extra-black': 'normal 950',
  'thin-italic': 'italic 100',
  'extra-light-italic': 'italic 200',
  'light-italic': 'italic 300',
  'regular-italic': 'italic 400',
  'medium-italic': 'italic 500',
  'semi-bold-italic': 'italic 600',
  'bold-italic': 'italic 700',
  'extra-bold-italic': 'italic 800',
  'black-italic': 'italic 900',
  'extra-black-italic': 'italic 950',
} as const

export const registerTypographyTransform = (styleDictionary: Core) =>
  styleDictionary.registerTransform({
    name: 'typography',
    type: `value`,
    matcher: (token) => token?.attributes?.category === 'typography',
    transformer(token) {
      const value = token.value as TypographyVariableValue
      const fontWeightWithStyle =
        fontWeightsWithStyles[
          String(value.fontWeight)
            .toLowerCase()
            .split(' ')
            .join('-') as keyof typeof fontWeightsWithStyles
        ] ?? fontWeightsWithStyles.regular

      return `${fontWeightWithStyle} ${value.fontSize}px${
        value.lineHeight ? `/${value.lineHeight}px` : ''
      } ${value.fontFamily}`
        .trim()
        .replace(/\s\s+/g, ' ')
    },
  })
