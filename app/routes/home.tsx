import { NavLink } from 'react-router'

import i18n from '~/i18n'

export function meta() {
  return [
    { title: i18n.t('title') },
    { name: 'description', content: i18n.t('description') },
  ]
}

export default function Home() {
  return (
    <ul>
      <li><NavLink to="/hammer-swipe">Hammer Swipe</NavLink></li>
      <li><NavLink to="/deep-anvil">Deep Anvil</NavLink></li>
    </ul>
  )
}
