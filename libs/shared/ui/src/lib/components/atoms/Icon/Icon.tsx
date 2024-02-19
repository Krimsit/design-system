import { ThemeProvider } from 'styled-components'

import { useMergeTheme } from '../../../hooks'

import { StyledWrapper } from './Icon.styles'

import type { IconProps } from './Icon.types'
import type { FC } from 'react'

const Icon: FC<IconProps> = ({
  icon: IconTag,
  className,
  color = 'currentColor',
  size = 'l',
  tokens,
  ...svgProps
}) => {
  const theme = useMergeTheme(tokens ?? {}, 'components.icon')
  const {
    components: {
      icon: { sizes },
    },
  } = theme
  const iconSize = sizes[size]

  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper $size={size} $color={color} className={className}>
        <IconTag
          width={iconSize}
          height={iconSize}
          {...svgProps}
          fill={'currentColor'}
        />
      </StyledWrapper>
    </ThemeProvider>
  )
}

export default Icon
