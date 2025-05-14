import {
  type Retrospective,
  type RetrospectiveResult,
  RetrospectiveResultPodium,
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
  const otherRetrospectives = scoredRetrospective.slice(3, 9)
  const resultType = computeResultType(scoredRetrospective)
  return {
    type: resultType,
    podium: extractPodium(retainedRetrospectives),
    additional: resultType === RetrospectiveResultType.MATCHED ? otherRetrospectives.map((retro) => retro.retrospective) : [],
  }
}

function extractPodium(retainedRetrospectives: RetrospectiveScore[]): RetrospectiveResultPodium | undefined {
  if (retainedRetrospectives.length === 3) {
    const mappedRetrospective = retainedRetrospectives.map((retro) => retro.retrospective)
    return {
      gold: mappedRetrospective[0],
      silver: mappedRetrospective[1],
      bronze: mappedRetrospective[2],
    }
  }

  return undefined
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