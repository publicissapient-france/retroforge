import { useTranslation } from 'react-i18next'

import psLogo from '~/common/assets/images/ps-logo.webp'

import { LangueSelector } from '../LangueSelector/LangueSelector'
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
      <LangueSelector />      
      <h1 className="align-self uppercase font-bold tracking-(--title-letter-spacing) text-(--accent-color) dark:text-(--accent-color-dark)"><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=oZ4s1SF8sUeCozOnSx90uGCkTilWip1PpA6dC9L_8JhURU9TU1pORlVRNEQ0VDM0S0pVRlBFNjlaTS4u" title="Linktitle" target="_blank" rel="noopener noreferrer">Share your feedback</a></h1>
    </header>
  )
}
