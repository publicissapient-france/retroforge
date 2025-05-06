import { useTranslation } from 'react-i18next'

import psLogo from '~/common/assets/images/ps-logo.webp'

import styles from './Header.module.css'

export type HeaderProps = {
  displayLogo?: boolean
}

export default function Header({ displayLogo = false }: HeaderProps) {
  const { t } = useTranslation()

  return (
    <header className={`${styles.header} flex justify-between items-center`}>
      <h1 className="self-center uppercase font-bold tracking-(--title-letter-spacing) text-(--accent-color) dark:text-(--accent-color-dark)">{t('title')}</h1>
      {displayLogo && <img src={psLogo} className="w-[55px] h-[29px]" alt="logo publicis sapient" />}
    </header>
  )
}
