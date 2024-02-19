import * as icons from '@shared/icons'

import type { ButtonIconProps } from '@shared/ui'
import type { ArgTypes } from '@storybook/types'

export const defaultArgs: ButtonIconProps = {
  color: 'primary',
  variant: 'filled',
  size: 'm',
  icon: icons.FilledActionAndroid,
  onPress: () => console.log('Clicked!)'),
  loading: false,
  isDisabled: false,
}

export const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/S9QXrSNo52KC5LlNDoOUUp/Figma-Variables-Example?type=design&node-id=240-2663&mode=design&t=ZU9IDmxChMzRxyBf-4',
  },
}

export const defaultControls: ArgTypes<ButtonIconProps> = {
  color: {
    control: 'radio',
    options: ['primary', 'secondary', 'error', 'common'],
  },
  variant: {
    control: 'radio',
    options: ['filled', 'outlined', 'ghost'],
  },
  size: {
    control: 'radio',
    options: ['l', 'm', 's', 'xs'],
  },
  icon: {
    control: 'select',
    options: Object.keys(icons),
    mapping: icons,
  },
  loading: {
    control: 'boolean',
  },
  isDisabled: {
    control: 'boolean',
  },
  onPress: {
    action: true,
    table: {
      disable: true,
    },
  },
}

export const primaryStateCode = `
<div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
  <ButtonIcon icon={FilledActionAndroid} color={'primary'} variant={'filled'} />
  <ButtonIcon icon={FilledActionAndroid} color={'primary'} variant={'outlined'} />
  <ButtonIcon icon={FilledActionAndroid} color={'primary'} variant={'ghost'} />
</div>
`

export const secondaryStateCode = `
<div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
  <ButtonIcon icon={FilledActionAndroid} color={'secondary'} variant={'filled'} />
  <ButtonIcon icon={FilledActionAndroid} color={'secondary'} variant={'outlined'} />
  <ButtonIcon icon={FilledActionAndroid} color={'secondary'} variant={'ghost'} />
</div>
`

export const errorStateCode = `
<div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
  <ButtonIcon icon={FilledActionAndroid} color={'error'} variant={'filled'} />
  <ButtonIcon icon={FilledActionAndroid} color={'error'} variant={'outlined'} />
  <ButtonIcon icon={FilledActionAndroid} color={'error'} variant={'ghost'} />
</div>
`

export const commonStateCode = `
<div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
  <ButtonIcon icon={FilledActionAndroid} color={'common'} variant={'filled'} />
  <ButtonIcon icon={FilledActionAndroid} color={'common'} variant={'outlined'} />
  <ButtonIcon icon={FilledActionAndroid} color={'common'} variant={'ghost'} />
</div>
`

export const sizesCode = `
<div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
  <ButtonIcon icon={FilledActionAndroid} size={'l'} />
  <ButtonIcon icon={FilledActionAndroid} size={'m'} />
  <ButtonIcon icon={FilledActionAndroid} size={'s'} />
  <ButtonIcon icon={FilledActionAndroid} size={'xs'} />
</div>
`

export const disabledCode = `
 <ButtonIcon icon={FilledActionAndroid} isDisabled />
`

export const loadingCode = `
 <ButtonIcon icon={FilledActionAndroid} loading />
`
