import * as icons from '@shared/icons'

import type { ButtonProps } from '@shared/ui'
import type { ArgTypes } from '@storybook/types'

export const defaultArgs: ButtonProps = {
  color: 'primary',
  variant: 'filled',
  size: 'm',
  iconLeft: icons.FilledActionAndroid,
  iconRight: icons.FilledActionArrowRightAlt,
  label: 'Button',
  onPress: () => console.log('Clicked!)'),
  loading: false,
  isDisabled: false,
}

export const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/S9QXrSNo52KC5LlNDoOUUp/Figma-Variables-Example?type=design&node-id=107-235&mode=design&t=ZU9IDmxChMzRxyBf-4',
  },
}

export const defaultControls: ArgTypes<ButtonProps> = {
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
  iconLeft: {
    control: 'select',
    options: Object.keys(icons),
    mapping: icons,
  },
  iconRight: {
    control: 'select',
    options: Object.keys(icons),
    mapping: icons,
  },
  label: {
    control: 'text',
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
  <Button color={'primary'} variant={'filled'} label={'Primary filled'} />
  <Button color={'primary'} variant={'outlined'} label={'Primary outlined'} />
  <Button  color={'primary'} variant={'ghost'} label={'Primary ghost'} />
</div>
`

export const secondaryStateCode = `
<div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
  <Button color={'secondary'} variant={'filled'} label={'Secondary filled'} />
  <Button color={'secondary'} variant={'outlined'} label={'Secondary outlined'} />
  <Button  color={'secondary'} variant={'ghost'} label={'Secondary ghost'} />
</div>
`

export const errorStateCode = `
<div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
  <Button color={'error'} variant={'filled'} label={'Error filled'} />
  <Button color={'error'} variant={'outlined'} label={'Error outlined'} />
  <Button  color={'error'} variant={'ghost'} label={'Error ghost'} />
</div>
`

export const commonStateCode = `
<div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
  <Button color={'common'} variant={'filled'} label={'Common filled'} />
  <Button color={'common'} variant={'outlined'} label={'Common outlined'} />
  <Button  color={'common'} variant={'ghost'} label={'Common ghost'} />
</div>
`

export const sizesCode = `
<div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
  <Button size={'l'} label={'Large'} />
  <Button size={'m'} label={'Medium'} />
  <Button size={'s'} label={'Small'} />
  <Button size={'xs'} label={'Extra small'} />
</div>
`

export const disabledCode = `
 <Button label={'Disabled'} isDisabled />
`

export const loadingCode = `
 <Button label={'Loading'} loading />
`
