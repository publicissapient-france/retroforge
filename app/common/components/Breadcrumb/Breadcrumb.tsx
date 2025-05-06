import { NavLink } from 'react-router'

import styles from './Breadcrumb.module.css'

export type BreadcrumbPath = {
  path?: string
  label: string
}

export type BreadcrumbProps = {
  paths: BreadcrumbPath[]
  className?: string
}

export default function Breadcrumb({ paths, className }: BreadcrumbProps) {
  return (
    <ul className={`${styles.breadcrumb} ${className} text-lg`}>
      {paths.map((path) => {
        if (path.path) {
          return <li key={path.label}><NavLink to={path.path}>{path.label}</NavLink></li>
        }

        return <li key={path.label}><span>{path.label}</span></li>
      })}
    </ul>
  )
}
