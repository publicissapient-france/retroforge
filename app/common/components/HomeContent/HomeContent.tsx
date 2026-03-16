import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router'

import confusedFace from '~/common/assets/images/confused-face.webp'
import rugbyBalloon from '~/common/assets/images/rugby-balloon.webp'
import HomeCard, { HomeCardAction } from '~/common/components/HomeCard/HomeCard'
import { ButtonNo } from '~/common/components/Images/ButtonNo'
import { ButtonYes } from '~/common/components/Images/ButtonYes'

import styles from './HomeContent.module.css'

export default function HomeContent() {
  const { t } = useTranslation()

  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <div className={styles.title}>{t('home.welcomeLabel')}</div>
        <section className={styles.actionsSection}>
          <div className={styles.ctaRow}>
            <NavLink to="/hammer-swipe" title={t('home.tooltips.start')} className={`${styles.ctaButton} ${styles.primaryCta}`}>{t('home.start')}</NavLink>
            <NavLink to="/deep-anvil" title={t('home.tooltips.advanced')} className={`${styles.ctaButton} ${styles.secondaryCta}`}>{t('home.advanced')}</NavLink>
            <a
              href="https://tinyurl.com/coachretro"
              target="_blank"
              rel="noopener noreferrer"
              title={t('home.tooltips.coachRetro')}
              className={`${styles.ctaButton} ${styles.secondaryCta}`}
            >
              {t('home.coachRetro')}
            </a>
          </div>
          <div className={styles.tertiaryActions}>
            <NavLink to="/retrospectives" className={styles.seeAllLink}>
              <span>{t('retrospectives.seeAll')}</span>
              <span aria-hidden="true" className={styles.actionIcon}>→</span>
            </NavLink>
            <a
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=oZ4s1SF8sUeCozOnSx90uGCkTilWip1PpA6dC9L_8JhURU9TU1pORlVRNEQ0VDM0S0pVRlBFNjlaTS4u"
              title="Linktitle"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.feedbackLink}
            >
              <span>Share your feedback</span>
              <span aria-hidden="true" className={styles.actionIcon}>↗</span>
            </a>
          </div>
        </section>
      </div>
      <div className={styles.right}>
        <div className={styles.cardStack}>
          <HomeCard
            className={`${styles.card} ${styles.redCard} dark:bg-(--accent-color-dark) bg-(--accent-color) text-white`}
            rotation={-7}
            icon={<img src={confusedFace} alt="confused face" width="72" />}
            question={t('home.redCardQuestion')}
          >
            <HomeCardAction icon={<ButtonNo className="w-[20px] h-[20px] text-white dark:text-black" />} />
            <HomeCardAction icon={<ButtonYes className="w-[25px] h-[20px] text-(--accent-color) dark:text-(--accent-color-dark)" />} />
          </HomeCard>
          <HomeCard
            className={`${styles.card} ${styles.whiteCard} bg-white dark:bg-gray-700`}
            rotation={3}
            icon={<img src={rugbyBalloon} alt="Rugby balloon" width="72" />}
            question={t('home.whiteCardQuestion')}
          >
            <HomeCardAction icon={<ButtonNo className="w-[20px] h-[20px] text-black dark:text-white" />} />
            <HomeCardAction icon={<ButtonYes className="w-[25px] h-[20px] text-(--accent-color) dark:text-(--accent-color-dark)" />} />
          </HomeCard>
        </div>
      </div>
    </div>
  )
}
