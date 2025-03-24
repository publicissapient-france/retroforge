import { useTranslation } from 'react-i18next'

import styles from './Header.module.css'

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className={`${styles.header} flex justify-center`}>
      <h1 className="self-center">{t('title')}</h1>
    </header>
  )
}
