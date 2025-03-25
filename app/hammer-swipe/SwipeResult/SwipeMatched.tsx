import { useTranslation } from 'react-i18next'

import type { RetrospectiveResult } from '~/common/types/Restrospective'

export type SwipeMatchedProps = {
  matched: RetrospectiveResult
}

export function SwipeMatched({ matched }: SwipeMatchedProps) {
  const { t } = useTranslation()

  return (
    <>
      <h2>{t('retrospectives.MATCHED')}</h2>
      <ul>
        {matched.retrospectives.map((retrospective) => (
          <li key={retrospective}>{retrospective}</li>
        ))}
      </ul>
    </>
  )
}
