export type ColorVariableValue = string

export type NumberVariableValue = number

export type LinkVariableValue = {
  collection: string
  name: string
}

export type TypographyVariableValue = {
  fontSize: number
  fontFamily: string
  fontWeight: number | string
  lineHeight: number
  lineHeightUnit: 'PERCENT' | 'PIXELS'
  letterSpacing: number
  letterSpacingUnit: 'PERCENT' | 'PIXELS'
  textCase: string
  textDecoration: string
}

export type DefaultVariable = {
  name: string
}

export type CollectionLinkVariableValue = {
  collection: string
  name: string
}

export type ColorVariable = DefaultVariable & {
  type: 'color'
  isAlias: false
  value: ColorVariableValue
}

export type NumberVariable = DefaultVariable & {
  type: 'number'
  isAlias: false
  value: NumberVariableValue
}

export type LinkVariable = DefaultVariable & {
  type: 'link'
  isAlias: true
  value: LinkVariableValue
}

export type TypographyVariable = DefaultVariable & {
  type: 'typography'
  isAlias: false
  value: TypographyVariableValue
}

export type Variable =
  | ColorVariable
  | LinkVariable
  | NumberVariable
  | TypographyVariable

export type ParsedVariable = {
  value: LinkVariableValue | TypographyVariableValue | number | string
  attributes?: {
    category: string
    theme: string
    isAlias: boolean
  }
}

export type CollectionVariables = {
  [x: string]: CollectionVariables | ParsedVariable
}

export type ParsedTheme = {
  name: string
  collections: CollectionVariables
}
