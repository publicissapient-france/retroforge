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
      <br/>
      <h3 className="right uppercase text-(--accent-color) dark:text-(--accent-color-dark)"><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=oZ4s1SF8sUeCozOnSx90uGCkTilWip1PpA6dC9L_8JhURU9TU1pORlVRNEQ0VDM0S0pVRlBFNjlaTS4u" title="Linktitle" target="_blank" rel="noopener noreferrer">Share your feedback</a></h3>
    </div>
  )
}
