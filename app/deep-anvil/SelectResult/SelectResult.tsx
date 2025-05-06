import { useMemo } from 'react'

import { NoRetrospectiveMatch } from '~/common/components/NoRestrospectiveMatch/NoRetrospectiveMatch'
import { RetrospectiveMatched } from '~/common/components/RetrospectiveMatched/RetrospectiveMatched'
import { type Computation, computeAppropriateRetroBasedOnScoring } from '~/common/computations/questions-compute'
import { RetrospectiveResult, RetrospectiveResultType, type TagsRetrospective } from '~/common/types/Restrospective'
import type { SelectResponse } from '~/deep-anvil/DeepAnvil'

export type SelectResultProps = {
  result: RetrospectiveResult
  className?: string
}

export function SelectResult({ result, className }: SelectResultProps) {
  if (result.type === RetrospectiveResultType.NO_MATCH) {
    return <NoRetrospectiveMatch />
  }

  return <RetrospectiveMatched className={className} matched={result} />
}
