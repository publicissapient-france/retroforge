import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './common/assets/locales/en/translation.json'
import fr from './common/assets/locales/fr/translation.json'

const resources = {
  fr: { translation: fr },
  en: { translation: en },
}

i18n.use(initReactI18next).init({
  resources,
  supportedLngs: ['en'],
  fallbackLng: 'en',
  lng: 'en',
  load: 'languageOnly',
  interpolation: { escapeValue: false },
})

export default i18n
