import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './common/assets/locales/en/translation.json'
import fr from './common/assets/locales/fr/translation.json'

const resources = {
  fr: { translation: fr },
  en: { translation: en },
}

const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined'

const customLanguageDetector = {
  type: 'languageDetector' as const,
  async: false,

  init() {
    // no-op
  },

  detect() {
    if (isBrowser) {
      const storedLng = localStorage.getItem('i18nextLng')
      if (storedLng) {
        return storedLng.split('-')[0]
      }

      const navLang = navigator.language || 'en'
      return navLang.split('-')[0]
    }
    return 'fr'
  },

  cacheUserLanguage(lng: string) {
    if (isBrowser) {
      const baseLang = lng.split('-')[0]
      localStorage.setItem('i18nextLng', baseLang)
    }
  },
}
i18n.use(customLanguageDetector).use(initReactI18next).init({
  resources,
  supportedLngs: ['en', 'fr'],
  load: 'languageOnly',
  interpolation: { escapeValue: false },
  detection: { order: ['localStorage', 'navigator'], caches: ['localStorage'] },
})

export default i18n
