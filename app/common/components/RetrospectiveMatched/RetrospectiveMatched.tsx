import type { RetrospectiveResult } from '~/common/types/Restrospective'
import RetrospectiveListing from '~/retrospectives/RetrospectiveListing/RetrospectiveListing'

export type RetrospectiveMatchedProps = {
  matched: RetrospectiveResult
  className?: string
}

export function RetrospectiveMatched({ matched, className }: RetrospectiveMatchedProps) {
  return (
    <div className={className}>
      <RetrospectiveListing retrospectives={matched.retrospectives} />
    </div>
  )
}