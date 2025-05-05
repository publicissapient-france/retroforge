import React from 'react'
import { Outlet } from 'react-router'

import Header from '~/common/components/header/Header'

import styles from './BasicLayout.module.css'

export default function BasicLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
    </div>
  )
}