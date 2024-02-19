import { Children, cloneElement, isValidElement } from 'react'

import { getElementFromSibling, groupNavigationHandler } from '../../../utils'

import type { KeyboardEvent, KeyboardEventHandler } from 'react'
import type { ButtonGroupProps } from './ButtonGroup.types'

export const useButtonGroupLogic = ({ children, size }: ButtonGroupProps) => {
  const buttons = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        size,
        color: 'primary',
        variant: 'outlined',
      })
    }

    return child
  })

  const handleKeyDown: KeyboardEventHandler = (
    event: KeyboardEvent<HTMLButtonElement>,
  ) => {
    const target = event.target as HTMLElement
    const prevElement = getElementFromSibling({
      element: target,
      direction: 'previous',
    })
    const nextElement = getElementFromSibling({
      element: target,
      direction: 'next',
    })

    groupNavigationHandler({
      event,
      options: {
        orientation: 'horizontal',
        prevElement,
        nextElement,
      },
    })
  }

  return {
    buttons,
    handleKeyDown,
  }
}
