import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router'

import Breadcrumb, { BreadcrumbPath } from '~/common/components/Breadcrumb/Breadcrumb'
import retrospectives from '~/common/data/retrospectives.json'
import { useCurrentLanguage } from '~/common/hooks/UseCurrentLanguage'
import { Retrospective } from '~/common/types/Restrospective'
import i18n from '~/i18n'
import RetrospectiveDetails from '~/retrospectives/RetrospectiveDetails/RetrospectiveDetails'

import { Route } from '../../.react-router/types/app/routes/+types/retrospective-details'

export function meta() {
  return [
    { title: i18n.t('retrospectives.title') },
    { name: 'description', content: i18n.t('retrospectives.description') },
  ]
}

export default function RetrospectiveDetailsPage({ params }: Route.LoaderArgs) {
  const { t } = useTranslation()
  const location = useLocation()
  const { currentLanguage } = useCurrentLanguage()

  const notFoundRetro: Retrospective = {
    id: 'not-found',
    name: {
      fr: 'Non trouvée',
      en: 'Not Found',
    },
    filename: 'Not-Implemented.md',
    description: {
      fr: 'Non trouvée',
      en: 'Not Found',
    },
    emoji: '',
    tags: [],
  }
  const retrospective: Retrospective = retrospectives.retrospectives.find((retro) => retro.id === params.retrospectiveId) ?? notFoundRetro

  const computedPaths: BreadcrumbPath[] = useMemo(() => {
    const startingPath = { path: '/', label: 'home.title' }
    const endingPath = { label: retrospective?.name?.[currentLanguage] ?? '' }
    const splitedPaths = location.pathname.split('/')
    const usefullPaths = splitedPaths.toSpliced(splitedPaths.length - 1, 1).toSpliced(0, 1)
    const breadCrumbMiddlePaths = usefullPaths.reduce<BreadcrumbPath[]>((acc, path) => {
      return [
        ...acc,
        {
          path: `${acc.map((p) => p.path).join('/')}/${path}`,
          label: `breadcrumb.${path}.title`,
        },
      ]
    }, [])
    return [startingPath, ...breadCrumbMiddlePaths, endingPath]
  }, [location])

  return (
    <>
      <Breadcrumb className="mb-2" paths={computedPaths} />
      <RetrospectiveDetails retrospective={retrospective} />
    </>
  )
}
