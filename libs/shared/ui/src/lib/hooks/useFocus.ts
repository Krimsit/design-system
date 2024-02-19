import { useState } from 'react'

import type { FocusEvent } from 'react'

export type UseFocus = {
  defaultFocus?: boolean
  onFocus?: (event: FocusEvent) => void
  onBlur?: (event: FocusEvent) => void
}

export const useFocus = ({ defaultFocus, onFocus, onBlur }: UseFocus) => {
  const [isInnerFocused, setIsInnerFocused] = useState<boolean>(
    Boolean(defaultFocus),
  )

  const handleFocus = (event: FocusEvent) => {
    setIsInnerFocused(true)
    onFocus?.(event)
  }

  const handleBlur = (event: FocusEvent) => {
    setIsInnerFocused(false)
    onBlur?.(event)
  }

  return {
    isFocused: isInnerFocused,
    handleFocus,
    handleBlur,
  }
}
