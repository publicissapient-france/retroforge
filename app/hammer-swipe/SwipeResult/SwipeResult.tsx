import { useMemo } from 'react'

import { RetrospectiveResultType, type TagsRetrospective } from '~/common/types/Restrospective'
import type { Question } from '~/hammer-swipe/HammerSwipe'
import { SwipeMatched } from '~/hammer-swipe/SwipeResult/SwipeMatched'
import { SwipeNoMatch } from '~/hammer-swipe/SwipeResult/SwipeNoMatch'
import { SwipeNotPertinent } from '~/hammer-swipe/SwipeResult/SwipeNotPertinent'
import { computeAppropriateRetro } from '~/hammer-swipe/SwipeResult/SwipeResult.utils'

export type SwipeResultProps = {
  results: Question[]
  retrospectives: TagsRetrospective[]
}

export default function SwipeResult({ results, retrospectives }: SwipeResultProps) {
  const computed = useMemo(() => computeAppropriateRetro(results, retrospectives), [results, retrospectives])

  if (computed.type === RetrospectiveResultType.NO_MATCH) {
    return <SwipeNoMatch />
  }

  if (computed.type === RetrospectiveResultType.NOT_PERTINENT) {
    return <SwipeNotPertinent />
  }
  return <SwipeMatched matched={computed} />
}
