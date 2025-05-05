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
  return <RetrospectiveListing retrospectives={retrospectives.retrospectives} />
}