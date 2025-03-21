import { NavLink } from 'react-router'

export function meta() {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function Home() {
  return <NavLink to="/hammer-swipe">Hammer Swipe</NavLink>
}
