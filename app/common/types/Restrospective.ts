export type TagsRetrospective = {
  name: string
  tags: string[]
}

export type Retrospective = TagsRetrospective & {
  id: string
  filename: string
  emoji: string
  description: string
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

export type RetrospectiveResult = {
  type: RetrospectiveResultType
  retrospectives: Retrospective[]
}

export type SuggestedRetrospective = {
  retrospective: string
  weight: number
}
