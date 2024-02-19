import { useState } from 'react'

export type UseToggleState = {
  defaultState?: boolean
  state?: boolean
  onChange?: (state: boolean) => void
}

export const useToggleState = ({
  defaultState = false,
  state,
  onChange,
}: UseToggleState) => {
  const [innerState, setInnerState] = useState<boolean>(defaultState)

  const setState = (value: boolean) => {
    setInnerState(value)
    onChange?.(state ?? value)
  }
  const toggle = () => setInnerState(!innerState)

  return {
    state: state ?? innerState,
    setState,
    toggle,
  }
}
