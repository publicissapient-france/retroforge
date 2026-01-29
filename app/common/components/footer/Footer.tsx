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
        <div className={`${styles.arrowText} dark:text-white text-[#555555]`}>{t('footer.whoAreWe')} <span className="text-(--accent-color)">?</span>
        <h1 className="align-self uppercase font-bold tracking-(--title-letter-spacing) text-(--accent-color) dark:text-(--accent-color-dark)"><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=oZ4s1SF8sUeCozOnSx90uGCkTilWip1PpA6dC9L_8JhURU9TU1pORlVRNEQ0VDM0S0pVRlBFNjlaTS4u" title="Linktitle" target="_blank" rel="noopener noreferrer">Share your feedback</a></h1></div>
        <FooterArrow className="dark:text-white" />
      </div>
    </div>
  )
}
