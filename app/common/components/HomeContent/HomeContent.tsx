import React, { useEffect, useState } from 'react'
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

  const [isSmall, setIsSmall] = useState(() => typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 1100px)').matches)

  function registerOnMediaChange(event: MediaQueryListEvent) {
    setIsSmall(event.matches)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1100px)')
    mediaQuery.addEventListener('change', registerOnMediaChange)

    return () => mediaQuery.removeEventListener('change', registerOnMediaChange)
  }, [])

  useEffect(() => {
    console.log('isSmall', isSmall)
  }, [isSmall])

  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <div>{t('home.welcomeLabel')}</div>
        <nav className="pt-10 flex max-[1100px]:flex-col gap-5 items-center">
          <NavLink to="/hammer-swipe" className="font-bold uppercase text-white dark:text-black bg-(--accent-color) hover:bg-(--accent-color-hover) rounded-full text-lg px-15 py-2.5 dark:bg-(--accent-color-dark) dark:hover:bg-(--accent-color-dark-hover) text-center">{t('home.start')}</NavLink>
          <NavLink to="/retrospectives" className="tracking-[-0.05rem]">{t('retrospectives.seeAll')}</NavLink>
        </nav>
      </div>
      {!isSmall && (
        <div className={`${styles.right} relative h-full flex items-center ml-10`}>
          <HomeCard
            className="dark:bg-(--accent-color-dark) bg-(--accent-color) text-white absolute"
            rotation={-10}
            icon={<img src={confusedFace} alt="confused face" width="72" />}
            question={t('home.redCardQuestion')}
          >
            <HomeCardAction icon={<ButtonNo className="w-[20px] h-[20px] text-white dark:text-black" />} />
            <HomeCardAction icon={<ButtonYes className="w-[25px] h-[20px] text-(--accent-color) dark:text-(--accent-color-dark)" />} />
          </HomeCard>
          <HomeCard
            className="bg-white dark:bg-gray-700 absolute left-[200px]"
            rotation={5}
            icon={<img src={rugbyBalloon} alt="Rugby balloon" width="72" />}
            question={t('home.whiteCardQuestion')}
          >
            <HomeCardAction icon={<ButtonNo className="w-[20px] h-[20px] text-black dark:text-white" />} />
            <HomeCardAction icon={<ButtonYes className="w-[25px] h-[20px] text-(--accent-color) dark:text-(--accent-color-dark)" />} />
          </HomeCard>
        </div>
      )}
    </div>
  )
}