import type { Variable, CollectionVariables } from '../../../types'

export type InputJsonMode = {
  name: string
  variables: Variable[]
}

export type InputJsonCollection = {
  name: string
  modes: InputJsonMode[]
}

export type InputJson = {
  version: string
  collections: InputJsonCollection[]
}

export type SplittedModeCollection = {
  name: string
  variables: Variable[]
}

export type ParsedCollection = {
  mode: string
  collection: SplittedModeCollection
}

export type SplittedMode = {
  [key: string]: SplittedModeCollection[]
}

export type Mode = {
  name: string
  collections: SplittedModeCollection[]
}

export type ParsedModeCollection = {
  [key: string]: CollectionVariables
}

export type ParsedMode = {
  name: string
  collections: ParsedModeCollection
}
