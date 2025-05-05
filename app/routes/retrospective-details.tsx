import retrospectives from '~/common/data/retrospectives.json'
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
  const retrospective = retrospectives.retrospectives.find((retro) => retro.id === params.retrospectiveId)

  if (retrospective) {
    return <RetrospectiveDetails retrospective={retrospective} />
  }

  return <p>TODO</p>
}
