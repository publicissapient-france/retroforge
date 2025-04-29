import { useMemo } from 'react'

import { NoRetrospectiveMatch } from '~/common/components/NoRestrospectiveMatch/NoRetrospectiveMatch'
import { RetrospectiveMatched } from '~/common/components/RetrospectiveMatched/RetrospectiveMatched'
import { type Computation, computeAppropriateRetroBasedOnScoring } from '~/common/computations/questions-compute'
import { RetrospectiveResultType, type TagsRetrospective } from '~/common/types/Restrospective'
import type { Question } from '~/hammer-swipe/HammerSwipe'

export type SwipeResultProps = {
  results: Question[]
  retrospectives: TagsRetrospective[]
}

export default function SwipeResult({ results, retrospectives }: SwipeResultProps) {
  const computed = useMemo(() => {
    const mappedResults: Computation[] = results.map((result) => ({ id: result.id, question: result.question, response: { tags: result.tags } }))
    return computeAppropriateRetroBasedOnScoring(mappedResults, retrospectives)
  }, [results, retrospectives])

  if (computed.type === RetrospectiveResultType.NO_MATCH) {
    return <NoRetrospectiveMatch />
  }

  return <RetrospectiveMatched matched={computed} />
}
