import { styled } from '@storybook/theming'
import { StyledItemValueProps } from './TokenItem.types'

export const StyledContainer = styled.div({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '25px',
})

export const StyledDescription = styled.div(() => ({
  width: 300,
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
}))

export const StyledTitle = styled.div(({ theme }) => ({
  fontWeight: theme.typography.weight.bold,
  color: theme.color.defaultText,
  wordBreak: 'break-word',
}))

export const StyledSubtitle = styled.div(({ theme }) => ({
  fontWeight: theme.typography.weight.bold,
  color: theme.color.mediumdark,
  wordBreak: 'break-word',
}))

export const StyledItem = styled.div(({ theme }) => {
  return {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
    flex: 1,
    flexWrap: 'wrap',
    borderRadius: theme.appBorderRadius,
  }
})

export const StyledItemValueContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
})

export const StyledItemValue = styled.div<StyledItemValueProps>(
  ({ theme, $color, $width }) => {
    const backgroundColor = $color ?? theme.color.primary
    const width = $width ?? '100%'

    return {
      padding: '5px 20px',
      flex: 1,
      minWidth: 100,
      position: 'relative',
      border: `1px solid ${theme.appBorderColor}`,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      justifyContent: 'center',
      zIndex: 1,

      '&::after': {
        content: '""',
        position: 'absolute',
        zIndex: 0,
        left: '0',
        top: '50%',
        transform: `translateY(-50%)`,
        height: '100%',
        backgroundColor,
        width,
      },
    }
  }
)

export const StyledItemValueText = styled.div(({ theme }) => ({
  color: theme.color.mediumdark,
  fontFamily: theme.typography.fonts.mono,
  fontSize: theme.typography.size.s1,
}))
