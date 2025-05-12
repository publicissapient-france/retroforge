import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

import Breadcrumb from '~/common/components/Breadcrumb/Breadcrumb'
import { useRetrospectiveContext } from '~/common/context/RetrospectiveContext'
import SwipeResult from '~/hammer-swipe/SwipeResult/SwipeResult'
import i18n from '~/i18n'

export function meta() {
  return [
    { title: i18n.t('hammerSwipe.title') },
    { name: 'description', content: i18n.t('hammerSwipe.description') },
  ]
}

export default function HammerSwipeMatchPage() {
  const { state } = useRetrospectiveContext()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const paths = [
    { path: '/', label: t('home.title') },
    { path: '/hammer-swipe', label: t('hammerSwipe.title') },
    { label: t('match.title') },
  ]

  useEffect(() => {
    if (!state.result) {
      navigate('/hammer-swipe')
    }
  }, [state.result, navigate])

  return (
    <>
      <Breadcrumb paths={paths} />
      {state.result && <SwipeResult className="flex gap-5 justify-center" result={state.result} />}
    </>
  )
}