import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()

  return (
    <ul className={`${styles.breadcrumb} ${className} text-lg max-sm:text-sm truncate`}>
      {paths.map((path) => {
        if (path.path) {
          return <li key={path.label}><NavLink to={path.path}>{t(path.label)}</NavLink></li>
        }

        return <li key={path.label} className="truncate text-ellipsis"><span>{t(path.label)}</span></li>
      })}
    </ul>
  )
}
