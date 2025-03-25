import type { TagsRetrospective } from '~/common/types/Restrospective'
import type { Question } from '~/hammer-swipe/HammerSwipe'

enum RetrospectiveResultType {
  NO_PERTINENT = 'NO_PERTINENT',
  NO_MATCH = 'NO_MATCH',
  MATCHED = 'MATCHED',
}

export type RetrospectiveResult = {
  type: RetrospectiveResultType
  retrospectives: string[]
}

export type SuggestedRetrospective = {
  retrospective: string
  weight: number
}

export function computeAppropriateRetro(answers: Question[], tagsRetrospectives: TagsRetrospective[]): RetrospectiveResult {
  const tagReduced = answers
    .flatMap((result) => result.tags)
    .reduce<Record<string, number>>((acc, tag) => {
      if (tag in acc) {
        return { ...acc, [tag]: acc[tag] + 1 }
      }

      return { ...acc, [tag]: 1 }
    }, {})
  const sorted = Object.fromEntries(Object.entries(tagReduced).sort(([, resulta], [, resultb]) => resultb - resulta))
  const scoreValues = new Set(Object.values(sorted))
  if (scoreValues.size === 1) {
    return { type: RetrospectiveResultType.NO_PERTINENT, retrospectives: [] }
  }
  if (scoreValues.size === 0) {
    return { type: RetrospectiveResultType.NO_MATCH, retrospectives: [] }
  }

  const retainedTags = Object.keys(sorted).slice(0, 2)
  console.log('retainedTags', retainedTags)
  const weightedSuggestedRetrospective = tagsRetrospectives.reduce<SuggestedRetrospective[]>((acc, tagsRetro) => {
    console.log('tagsRtro', tagsRetro)
    const every = retainedTags.every((tag) => tagsRetro.tags.includes(tag))
    console.log('Every', every)
    if (every) {
      return [...acc, { retrospective: tagsRetro.name, weight: 10 }]
    }
    const some = retainedTags.some((tag) => tagsRetro.tags.includes(tag))
    console.log('some', some)
    if (some) {
      return [...acc, { retrospective: tagsRetro.name, weight: 5 }]
    }
    return acc
  }, [])
  const sortedSuggestedRetrospective = weightedSuggestedRetrospective.sort((first, second) => second.weight - first.weight)
  return {
    type: RetrospectiveResultType.MATCHED,
    retrospectives: sortedSuggestedRetrospective.map((retrospective) => retrospective.retrospective),
  }
}
