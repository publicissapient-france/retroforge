import { useTranslation } from 'react-i18next'

export function SwipeNotPertinent() {
  const { t } = useTranslation()

  return <h2>{t('retrospectives.NOT_PERTINENT')}</h2>
}
