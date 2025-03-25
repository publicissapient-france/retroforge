import { type RetrospectiveResult, RetrospectiveResultType, type SuggestedRetrospective, type TagsRetrospective } from '~/common/types/Restrospective'
import type { Question } from '~/hammer-swipe/HammerSwipe'

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
  if (scoreValues.size === 0) {
    return { type: RetrospectiveResultType.NO_MATCH, retrospectives: [] }
  }

  const retainedTags = Object.keys(sorted).slice(0, 3)
  const weightedSuggestedRetrospective = tagsRetrospectives.reduce<SuggestedRetrospective[]>((acc, tagsRetro) => {
    const every = retainedTags.every((tag) => tagsRetro.tags.includes(tag))
    if (every) {
      return [...acc, { retrospective: tagsRetro.name, weight: 10 }]
    }
    const some = retainedTags.some((tag) => tagsRetro.tags.includes(tag))
    if (some) {
      return [...acc, { retrospective: tagsRetro.name, weight: 5 }]
    }
    return acc
  }, [])
  const sortedSuggestedRetrospective = weightedSuggestedRetrospective.sort((first, second) => second.weight - first.weight)
  return {
    type: scoreValues.size === 1 ? RetrospectiveResultType.NOT_PERTINENT : RetrospectiveResultType.MATCHED,
    retrospectives: sortedSuggestedRetrospective.map((retrospective) => retrospective.retrospective),
  }
}
