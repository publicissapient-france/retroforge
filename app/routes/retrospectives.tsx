import { useTranslation } from 'react-i18next'

import Breadcrumb from '~/common/components/Breadcrumb/Breadcrumb'
import retrospectives from '~/common/data/retrospectives.json'
import i18n from '~/i18n'
import RetrospectiveListing from '~/retrospectives/RetrospectiveListing/RetrospectiveListing'

export function meta() {
  return [
    { title: i18n.t('retrospectives.title') },
    { name: 'description', content: i18n.t('retrospectives.description') },
  ]
}

export default function RetrospectivesPage() {
  const { t } = useTranslation()
  const paths = [{ path: '/', label: t('home.title') }, { label: t('retrospectives.title') }]

  return (
    <>
      <Breadcrumb className="mb-4" paths={paths} />
      <RetrospectiveListing retrospectives={retrospectives.retrospectives} />
    </>
  )
}