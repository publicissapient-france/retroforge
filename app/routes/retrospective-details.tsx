import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router'

import Breadcrumb, { BreadcrumbPath } from '~/common/components/Breadcrumb/Breadcrumb'
import retrospectives from '~/common/data/retrospectives.json'
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

  const notFoundRetro: Retrospective = {
    id: 'not-found',
    name: t('retrospectives.notFound'),
    filename: 'Not-Implemented.md',
    description: 'Not Found',
    emoji: '',
    tags: [],
  }
  const retrospective = retrospectives.retrospectives.find((retro) => retro.id === params.retrospectiveId) ?? notFoundRetro

  const computedPaths: BreadcrumbPath[] = useMemo(() => {
    const startingPath = { path: '/', label: t('home.title') }
    const endingPath = { label: retrospective?.name ?? '' }
    const splitedPaths = location.pathname.split('/')
    const usefullPaths = splitedPaths.toSpliced(splitedPaths.length - 1, 1).toSpliced(0, 1)
    const breadCrumbMiddlePaths = usefullPaths.reduce<BreadcrumbPath[]>((acc, path) => {
      return [
        ...acc,
        {
          path: `${acc.map((p) => p.path).join('/')}/${path}`,
          label: t(`breadcrumb.${path}.title`),
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
