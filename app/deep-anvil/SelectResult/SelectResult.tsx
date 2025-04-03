import { useMemo } from 'react'

import { NoRetrospectiveMatch } from '~/common/components/NoRestrospectiveMatch/NoRetrospectiveMatch'
import { RetrospectiveMatched } from '~/common/components/RetrospectiveMatched/RetrospectiveMatched'
import { type Computation, computeAppropriateRetro } from '~/common/computations/questions-compute'
import { RetrospectiveResultType, type TagsRetrospective } from '~/common/types/Restrospective'
import type { SelectResponse } from '~/deep-anvil/DeepAnvil'

export type SelectResultProps = {
  results: SelectResponse[]
  retrospectives: TagsRetrospective[]
}

export function SelectResult({ results, retrospectives }: SelectResultProps) {
  const computed = useMemo(() => {
    const mappedResults: Computation[] = results.map((result) => ({ id: result.id, question: result.label, response: { tags: result.tags } }))
    return computeAppropriateRetro(mappedResults, retrospectives)
  }, [results, retrospectives])
  
  if (computed.type === RetrospectiveResultType.NO_MATCH) {
    return <NoRetrospectiveMatch />
  }

  return <RetrospectiveMatched matched={computed} />
}
