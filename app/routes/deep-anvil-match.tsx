import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

import Breadcrumb from '~/common/components/Breadcrumb/Breadcrumb'
import { useRetrospectiveContext } from '~/common/context/RetrospectiveContext'
import { SelectResult } from '~/deep-anvil/SelectResult/SelectResult'
import i18n from '~/i18n'

export function meta() {
  return [
    { title: i18n.t('deepAnvil.title') },
    { name: 'description', content: i18n.t('deepAnvil.description') },
  ]
}

export default function DeepAnvilMatchPage() {
  const { state } = useRetrospectiveContext()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const paths = [
    { path: '/', label: t('home.title') },
    { path: '/deep-anvil', label: t('deepAnvil.title') },
    { label: t('match.title') },
  ]

  useEffect(() => {
    if (!state.result) {
      navigate('/deep-anvil')
    }
  }, [state.result, navigate])

  return (
    <>
      <Breadcrumb paths={paths} />
      {state.result && <SelectResult className="flex flex-col gap-10 items-center" result={state.result} />}
    </>
  )
}