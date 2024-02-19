import styled from 'styled-components'

export const ButtonGroupContainer = styled.div`
  display: flex;

  & > button {
    &:first-child {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }

    &:last-child {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }

    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }

    &:not(:first-child) {
      margin-left: -1px;
    }

    &:disabled {
      z-index: -1;
    }
  }
`
