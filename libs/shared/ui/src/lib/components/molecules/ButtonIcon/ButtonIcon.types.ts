import type { IconComponent } from '@shared/icon'
import type { ButtonBaseProps } from '../../atoms'

export type ButtonIconProps = ButtonBaseProps & {
  /** Icon's name */
  icon: IconComponent
}
