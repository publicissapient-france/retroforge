import { useTranslation } from 'react-i18next'

import psLogo from '~/common/assets/images/ps-logo.webp'
import { FooterArrow } from '~/common/components/Images/FooterArrow'

import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <div className={`${styles.footer} ${styles.footerArrow}`}>
      <div className="leading-[0] flex justify-center">
        <img src={psLogo} width="55" alt="logo publicis sapient" />
      </div>
      <div className={styles.arrowContainer}>
        <div className={`${styles.arrowText} dark:text-white text-[#555555]`}>{t('footer.whoAreWe')} <span className="text-(--accent-color)">?</span></div>
        <FooterArrow className="dark:text-white" />
      </div>
    </div>
  )
}
