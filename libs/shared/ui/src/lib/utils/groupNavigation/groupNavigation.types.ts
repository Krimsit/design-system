import type { KeyboardEvent } from 'react'

export type GroupOrientation = 'horizontal' | 'vertical'

export type GroupFindDirection = 'next' | 'previous'

export type GroupElement = HTMLElement | null

export type GroupNavigationHandlerParams = {
  event: KeyboardEvent<HTMLElement>
  options: {
    orientation: GroupOrientation
    prevElement: HTMLElement
    nextElement: HTMLElement
  }
}

export type GetInputFromSiblingParams = {
  element: GroupElement
  direction: GroupFindDirection
}
