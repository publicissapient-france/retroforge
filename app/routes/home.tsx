import { NavLink } from 'react-router'

export function meta() {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
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
