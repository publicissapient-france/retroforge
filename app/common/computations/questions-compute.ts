import {
  type Retrospective,
  type RetrospectiveResult,
  RetrospectiveResultType,
  RetrospectiveScore,
} from '~/common/types/Restrospective'
import type { Tags } from '~/common/types/Tags'

export type Computation = {
  id: string
  question: string
  response: ResponseComputation
}

export type ResponseComputation = {
  tags: Tags
}

export function computeAppropriateRetroBasedOnScoring(answers: Computation[], tagsRetrospectives: Retrospective[]): RetrospectiveResult {
  const tagsScores = answers
    .flatMap((result) => result.response.tags)
    .reduce<Record<string, number>>((acc, tag) => {
      if (tag in acc) {
        return { ...acc, [tag]: acc[tag] + 1 }
      }

      return { ...acc, [tag]: 1 }
    }, {})
  const sorted = Object.fromEntries(
    Object.entries(tagsScores)
      .sort(([, resulta], [, resultb]) => resultb - resulta),
  )
  const scoredRetrospective: RetrospectiveScore[] = tagsRetrospectives.map((retrospective) => {
    const score = retrospective.tags.reduce((acc, tag) => acc + (sorted[tag] ?? 0), 0)
    return {
      retrospective,
      score,
    }
  }).sort((scorea, scoreb) => scoreb.score - scorea.score)

  const retainedRetrospectives = scoredRetrospective.slice(0, 3)
  return {
    type: computeResultType(scoredRetrospective),
    retrospectives: retainedRetrospectives.map((retro) => retro.retrospective),
  }
}

function computeResultType(scoredRetrospectives: RetrospectiveScore[]): RetrospectiveResultType {
  if (scoredRetrospectives.every((retrospective) => retrospective.score === 0)) {
    return RetrospectiveResultType.NO_MATCH
  }
  if (scoredRetrospectives.every((retrospective) => retrospective.score === scoredRetrospectives[0].score)) {
    return RetrospectiveResultType.NOT_PERTINENT
  }
  return RetrospectiveResultType.MATCHED
}