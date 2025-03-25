import { useTranslation } from 'react-i18next'

export function SwipeNoMatch() {
  const { t } = useTranslation()

  return <h2>{t('retrospectives.NO_MATCH')}</h2>
}
