import Icon from '../Icon'
import { Other } from '../sports'

import { sportsIcon } from './SportsIcon.data'

import type { FC } from 'react'
import type { SportsIconProps } from './SportsIcon.types'

const SportsIcon: FC<SportsIconProps> = ({ icon, ...props }) => {
  const SportIcon = sportsIcon[icon] ?? Other

  return <Icon icon={SportIcon} {...props} />
}

export default SportsIcon
