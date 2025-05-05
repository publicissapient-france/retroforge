import { useTranslation } from 'react-i18next'

import styles from './Header.module.css'

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className={`${styles.header} flex`}>
      <h1 className="self-center uppercase font-bold tracking-(--title-letter-spacing) text-(--accent-color) dark:text-(--accent-color-dark)">{t('title')}</h1>
    </header>
  )
}
