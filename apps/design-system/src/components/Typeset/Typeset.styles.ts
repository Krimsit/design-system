import { styled } from '@storybook/theming'
import { StyledItemValueProps } from './Typeset.types'

export const StyledContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
})

export const StyledItem = styled.div({
  display: 'grid',
  gridTemplateColumns: '200px 1fr',
  alignItems: 'center',
  gap: '25px',
})

export const StyledItemTitle = styled.div(({ theme }) => ({
  fontWeight: theme.typography.weight.bold,
  color: theme.color.defaultText,
  wordBreak: 'break-word',
}))

export const StyledItemValue = styled.div<StyledItemValueProps>(
  ({ theme, $font }) => ({
    font: $font,
    color: theme.color.defaultText,
    wordBreak: 'break-word',
  })
)
