import { useTranslation } from 'react-i18next'

import type { RetrospectiveResult } from '~/common/types/Restrospective'

export type RetrospectiveMatchedProps = {
  matched: RetrospectiveResult
}

export function RetrospectiveMatched({ matched }: RetrospectiveMatchedProps) {
  const { t } = useTranslation()

  return (
    <>
      <h2>{t(`retrospectives.${matched.type}`)}</h2>
      <ul>
        {matched.retrospectives.map((retrospective) => (
          <li key={retrospective}>{retrospective}</li>
        ))}
      </ul>
    </>
  )
}