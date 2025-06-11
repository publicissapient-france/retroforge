import { GlobeAltIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { DropdownMenu } from '~/common/ui/DropdownMenu/DropdownMenu'
import i18n from '~/i18n'

export const LangueSelector = () => {
  const { t } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState<string>(i18n.language)
  
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language)
    setSelectedLanguage(language)
  }

  return (
    <DropdownMenu
      trigger={<GlobeAltIcon className="size-5" />}
      options={[{ label: t('language.fr'), value: 'fr' }, { label: t('language.en'), value: 'en' }]}
      selectedValue={selectedLanguage}
      onChange={handleLanguageChange}
    />
  )
}
