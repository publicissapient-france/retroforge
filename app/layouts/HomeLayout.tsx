import React from 'react'
import { Outlet } from 'react-router'

import Footer from '~/common/components/footer/Footer'
import Header from '~/common/components/header/Header'

import styles from './HomeLayout.module.css'

export default function HomeLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main}>
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
