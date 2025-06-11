import { TranslatedField } from './TranslatedField'

export type TagsRetrospective = {
  name: TranslatedField
  tags: string[]
}

export type Retrospective = TagsRetrospective & {
  id: string
  filename: string
  emoji: string
  description: TranslatedField
}


export type TagsRetrospectives = {
  retrospectives: TagsRetrospective[]
}

export type RetrospectiveScore = {
  retrospective: Retrospective
  score: number
}

export enum RetrospectiveResultType {
  NOT_PERTINENT = 'NOT_PERTINENT',
  NO_MATCH = 'NO_MATCH',
  MATCHED = 'MATCHED',
}

export type RetrospectiveResultPodium = {
  gold: Retrospective
  silver: Retrospective
  bronze: Retrospective
}

export type RetrospectiveResult = {
  type: RetrospectiveResultType
  podium?: RetrospectiveResultPodium
  additional: Retrospective[]
}

export type SuggestedRetrospective = {
  retrospective: string
  weight: number
}
