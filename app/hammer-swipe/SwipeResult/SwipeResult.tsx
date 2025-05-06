import { NoRetrospectiveMatch } from '~/common/components/NoRestrospectiveMatch/NoRetrospectiveMatch'
import { RetrospectiveMatched } from '~/common/components/RetrospectiveMatched/RetrospectiveMatched'
import { RetrospectiveResult, RetrospectiveResultType } from '~/common/types/Restrospective'

export type SwipeResultProps = {
  result: RetrospectiveResult
  className?: string
}

export default function SwipeResult({ result, className }: SwipeResultProps) {
  if (result.type === RetrospectiveResultType.NO_MATCH) {
    return (
      <div className={className}>
        <NoRetrospectiveMatch />
      </div>
    )
  }

  return <RetrospectiveMatched className={className} matched={result} />
}
