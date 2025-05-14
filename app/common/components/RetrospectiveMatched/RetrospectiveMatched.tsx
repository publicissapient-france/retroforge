import { useTranslation } from 'react-i18next'

import { RetrospectiveResult, RetrospectiveResultType } from '~/common/types/Restrospective'
import RetrospectiveListing from '~/retrospectives/RetrospectiveListing/RetrospectiveListing'
import RetrospectivePodium from '~/retrospectives/RetrospectivePodium/RetrospectivePodium'

export type RetrospectiveMatchedProps = {
  matched: RetrospectiveResult
  className?: string
}

export function RetrospectiveMatched({ matched, className }: RetrospectiveMatchedProps) {
  const { t } = useTranslation()
  return (
    <div className={className}>
      {matched.type === RetrospectiveResultType.MATCHED && matched.podium && (
        <RetrospectivePodium podium={matched.podium} />
      )}
      {matched.type === RetrospectiveResultType.MATCHED && (
        <h4>{t('retrospectives.canMatch')}</h4>
      )}
      {matched.type === RetrospectiveResultType.NOT_PERTINENT && (
        <h4>{t('retrospectives.NOT_PERTINENT')}</h4>
      )}
      <RetrospectiveListing retrospectives={matched.additional} />
    </div>
  )
}