import { useMemo } from 'react'

import type { TagsRetrospective } from '~/common/types/Restrospective'
import type { Question } from '~/hammer-swipe/HammerSwipe'
import { computeAppropriateRetro } from '~/hammer-swipe/SwipeResult/SwipeResult.utils'

export type SwipeResultProps = {
  results: Question[]
  retrospectives: TagsRetrospective[]
}

export default function SwipeResult({ results, retrospectives }: SwipeResultProps) {
  const computed = useMemo(() => computeAppropriateRetro(results, retrospectives), [results, retrospectives])

  return <p>{JSON.stringify(computed)}</p>
}
