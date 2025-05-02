import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router'

import confusedFace from '~/common/assets/images/confused-face.webp'
import rugbyBalloon from '~/common/assets/images/rugby-balloon.webp'
import HomeCard from '~/common/components/HomeCard/HomeCard'

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
        <nav className="pt-10 flex max-[1100px]:flex-col gap-5">
          <NavLink to="/hammer-swipe" className="font-bold uppercase text-white bg-(--accent-color) hover:bg-(--accent-color-hover) rounded-full text-lg px-15 py-2.5 dark:bg-(--accent-color-dark) dark:hover:bg-(--accent-color-dark-hover) text-center">{t('home.start')}</NavLink>
          <NavLink to="/deep-anvil" className="font-bold uppercase  text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full text-lg px-15 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 text-center">{t('home.advanced')}</NavLink>
        </nav>
      </div>
      {!isSmall && (
        <div className={`${styles.right} relative h-full flex items-center ml-10`}>
          <HomeCard
            className="bg-(--accent-color) text-white absolute"
            rotation={-10}
            icon={<img src={confusedFace} alt="confused face" width="72" />}
            question="L'équipe a rencontré pas mal de difficultés au dernier sprint."
          />
          <HomeCard
            className="bg-white absolute left-[200px]"
            rotation={5}
            icon={<img src={rugbyBalloon} alt="Rugby balloon" width="72" />}
            question="L'équipe a rencontré pas mal de difficultés au dernier sprint."
          />
        </div>
      )}
    </div>
  )
}