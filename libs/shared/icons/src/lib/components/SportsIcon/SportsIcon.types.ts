import type { IconProps } from '../Icon.types'
import type { SportsIds } from './SportsIcon.data'

export type SportsIconProps = Omit<IconProps, 'icon'> & {
  icon: SportsIds
}
