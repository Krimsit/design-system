import type { TypographyVariable } from '../../../types'

export type CollectionVariables = {
  [x: string]:
    | CollectionVariables
    | TypographyVariable
    | boolean
    | number
    | string
}
