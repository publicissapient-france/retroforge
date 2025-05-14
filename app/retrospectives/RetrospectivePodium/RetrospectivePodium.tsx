import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

import { RetrospectiveResultPodium } from '~/common/types/Restrospective'
import RetrospectiveCard from '~/retrospectives/RetrospectiveCard/RetrospectiveCard'

export type RetrospectivePodiumProps = {
  podium: RetrospectiveResultPodium
}

export default function RetrospectivePodium({ podium }: RetrospectivePodiumProps) {
  const [isSmall, setIsSmall] = useState(() => typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 720px)').matches)

  function registerOnMediaChange(event: MediaQueryListEvent) {
    setIsSmall(event.matches)
  }
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 720px)')
    mediaQuery.addEventListener('change', registerOnMediaChange)

    return () => mediaQuery.removeEventListener('change', registerOnMediaChange)
  }, [])

  return (
    <div className="flex gap-10 max-[720px]:flex-col justify-end items-end">
      {isSmall && (
        <>
          <NavLink to={podium.gold.id}>
          <RetrospectiveCard retrospective={podium.gold} size="large" color="gold" icon={<>🥇</>} />
          </NavLink>
          <NavLink to={podium.silver.id}>
            <RetrospectiveCard retrospective={podium.silver} size="medium" color="silver" icon={<>🥈</>}/>
          </NavLink>
        </>
      )}
      {!isSmall && (
        <>
          <NavLink to={podium.silver.id}>
            <RetrospectiveCard retrospective={podium.silver} size="medium" color="silver" icon={<>🥈</>}/>
          </NavLink>
          <NavLink to={podium.gold.id}>
            <RetrospectiveCard retrospective={podium.gold} size="large" color="gold" icon={<>🥇</>} />
          </NavLink>
        </>
      )}
      <NavLink to={podium.bronze.id}>
        <RetrospectiveCard retrospective={podium.bronze} size="small" color="bronze" icon={<>🥉</> }/>
      </NavLink>
    </div>
  )
}