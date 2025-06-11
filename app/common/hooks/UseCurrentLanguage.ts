import { useTranslation } from 'react-i18next'

export const useCurrentLanguage = () => {
  const { i18n } = useTranslation()

  return { currentLanguage: i18n.language ?? 'fr' }
}