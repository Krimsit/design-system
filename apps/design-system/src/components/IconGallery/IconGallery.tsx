import { ElementType, Fragment } from 'react'
import { Heading, IconItem } from '@storybook/blocks'

import { StyledContainer } from './IconGallery.styles'

import type { FC } from 'react'
import type { IconGalleryProps } from './IconGallery.types'

const IconGallery: FC<IconGalleryProps> = ({ icons, title }) => (
  <Fragment>
    <Heading>{title}</Heading>
    <StyledContainer>
      {Object.keys(icons).map((name) => {
        const Icon: ElementType = icons[
          name as keyof typeof icons
        ] as ElementType

        return (
          <IconItem name={name}>
            <Icon />
          </IconItem>
        )
      })}
    </StyledContainer>
  </Fragment>
)

export default IconGallery
