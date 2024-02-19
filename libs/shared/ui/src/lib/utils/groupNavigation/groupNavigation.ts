import { NavigationKeys } from './groupNavigation.constants'

import type { KeyboardEvent } from 'react'
import type {
  GroupElement,
  GroupFindDirection,
  GroupNavigationHandlerParams,
  GetInputFromSiblingParams,
} from './groupNavigation.types'

export const findSibling = (
  element: GroupElement,
  direction: GroupFindDirection,
): HTMLElement | null =>
  (element?.[`${direction}ElementSibling`] as HTMLElement) || element

export const getElementFromSibling = ({
  element,
  direction,
}: GetInputFromSiblingParams): HTMLElement => {
  const siblingElem = findSibling(element, direction)
  const targetElem = (siblingElem?.querySelector('input') || siblingElem) as
    | HTMLButtonElement
    | HTMLInputElement

  return targetElem.disabled
    ? getElementFromSibling({ element: siblingElem, direction })
    : targetElem
}

const buildKeyDownHandler =
  (element: HTMLElement, needFocus: boolean) => (e: KeyboardEvent) => {
    e.preventDefault()
    if (needFocus && element instanceof HTMLElement) element.focus()
  }

export const groupNavigationHandler = ({
  event,
  options,
}: GroupNavigationHandlerParams): void => {
  const { orientation, prevElement, nextElement } = options
  const isVertical = orientation === 'vertical'
  const isHorizontal = orientation === 'horizontal'
  const keyboardHandlers: Record<string, (e: KeyboardEvent) => void> = {
    [NavigationKeys.up]: buildKeyDownHandler(prevElement, isVertical),
    [NavigationKeys.down]: buildKeyDownHandler(nextElement, isVertical),
    [NavigationKeys.left]: buildKeyDownHandler(prevElement, isHorizontal),
    [NavigationKeys.right]: buildKeyDownHandler(nextElement, isHorizontal),
  }

  keyboardHandlers[event.key]?.(event)
}
