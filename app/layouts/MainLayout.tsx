import React from 'react'
import { Outlet } from 'react-router'

import { Wave } from '~/common/components/Wave/Wave'

import styles from './MainLayout.module.css'

export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <div className={styles.main}>
        <div className={styles.content}>
          <Outlet />
        </div>
        <Wave />
      </div>
    </div>
  )
}