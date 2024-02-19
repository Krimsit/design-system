import { Fragment } from 'react'
import { Heading, Subheading, Canvas } from '@storybook/blocks'

import { ColorItem } from './Test'

import type { FC, ReactNode } from 'react'

const Tokens: FC<{ object: object }> = ({ object }) => {
  const renderTokens = (tokens: object, parentKey: string): ReactNode =>
    Object.keys(tokens).map((key) => {
      const originalKey = `${parentKey ? `${parentKey}.` : ''}${key}`
      const tokenItem = tokens[key as keyof typeof tokens]

      if (typeof Object.values(tokenItem)[0] === 'string') {
        return (
          <ColorItem
            key={key}
            colors={
              typeof tokenItem === 'string' ? { '': tokenItem } : tokenItem
            }
            subtitle={`button.color.${originalKey}`}
            title={key}
          />
        )
      }

      return (
        <Fragment key={key}>
          <Subheading>{key}</Subheading>
          <Canvas>{renderTokens(tokenItem, originalKey)}</Canvas>
        </Fragment>
      )
    })

  return (
    <Fragment>
      <Heading>Tokens</Heading>
      {renderTokens(object, '')}
    </Fragment>
  )
}

export default Tokens
