import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet, useLocation } from 'react-router'

import Breadcrumb, { BreadcrumbPath } from '~/common/components/Breadcrumb/Breadcrumb'
import Header from '~/common/components/header/Header'
import { Wave } from '~/common/components/Wave/Wave'

import styles from './InGameLayout.module.css'

export default function InGameLayout() {
  const { t } = useTranslation()
  const location = useLocation()

  const computedPaths: BreadcrumbPath[] = useMemo(() => {
    const startingPath = { path: '/', label: t('home.title') }
    const splitedPaths = location.pathname.split('/')
    if (splitedPaths.length !== 2) {
      return [startingPath]
    }
    const mode = splitedPaths[1]
    const modePath = { label: t(`breadcrumb.${mode}.title`) }
    return [startingPath, modePath]
  }, [location])

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header displayLogo />
        <Breadcrumb paths={computedPaths} />
      </div>
      <div className={styles.main}>
        <div className={styles.content}>
          <Outlet />
        </div>
        <Wave />
      </div>
    </div>
  )
}