import HomeContent from '~/common/components/HomeContent/HomeContent'
import i18n from '~/i18n'

export function meta() {
  return [
    { title: i18n.t('title') },
    { name: 'description', content: i18n.t('description') },
  ]
}

export default function Home() {
  return (
    <HomeContent />
  )
}
