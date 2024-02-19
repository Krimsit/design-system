import { ButtonGroupProps } from '@shared/ui'
import type { ArgTypes } from '@storybook/types'

export const defaultArgs: ButtonGroupProps = {
  size: 'm',
  children: [],
}

export const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/S9QXrSNo52KC5LlNDoOUUp/Figma-Variables-Example?type=design&node-id=240-4187&mode=design&t=ZU9IDmxChMzRxyBf-4',
  },
}

export const defaultControls: ArgTypes<ButtonGroupProps> = {
  size: {
    control: 'radio',
    options: ['l', 'm', 's', 'xs'],
  },
  children: {
    table: {
      disable: true,
    },
  },
}

export const sizes = `
<div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
  <ButtonGroup size={'l'}>
    <Button label={'L First button'} />
    <Button label={'L Second button'} />
    <Button label={'L Third button'} />
  </ButtonGroup>
  <ButtonGroup size={'m'}>
    <Button label={'M First button'} />
    <Button label={'M Second button'} />
    <Button label={'M Third button'} />
  </ButtonGroup>
  <ButtonGroup size={'s'}>
    <Button label={'S First button'} />
    <Button label={'S Second button'} />
    <Button label={'S Third button'} />
  </ButtonGroup>
  <ButtonGroup size={'xs'}>
    <Button label={'XS First button'} />
    <Button label={'XS Second button'} />
    <Button label={'XS Third button'} />
  </ButtonGroup>
</div>
`

export const oneOfTheButtonsDisabled = `
<div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
  <ButtonGroup>
    <Button label={'Button'} />
    <Button label={'Button'} isDisabled />
    <Button label={'Button'} />
  </ButtonGroup>
</div>
`
