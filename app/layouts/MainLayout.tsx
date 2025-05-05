import React from 'react'
import { Outlet } from 'react-router'

import Header from '~/common/components/header/Header'
import { Wave } from '~/common/components/Wave/Wave'

import styles from './MainLayout.module.css'

export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <div className={styles.main}>
        <div className="p-[50px] max-[1100px]:p-[20px]">
          <Header />
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
        <Wave />
      </div>
    </div>
  )
}