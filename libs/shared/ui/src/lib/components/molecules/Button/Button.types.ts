import type { IconComponent } from '@shared/icon'
import type { ButtonBaseProps } from '../../atoms'

export type ButtonProps = ButtonBaseProps & {
  /** Icon to display inside left */
  iconLeft?: IconComponent
  /** Icon to display inside right */
  iconRight?: IconComponent
  /** Label to display inside */
  label: string
}
