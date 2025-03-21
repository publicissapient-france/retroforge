import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import commonFr from './common/locales/fr/common.json'

const resources = {
  fr: {
    translation: commonFr,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
})

export default i18n
