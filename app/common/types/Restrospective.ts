export type TagsRetrospective = {
  name: string
  tags: string[]
}

export type TagsRetrospectives = {
  retrospectives: TagsRetrospective[]
}

export type RetrospectiveScore = {
  name: string
  score: number
}

export enum RetrospectiveResultType {
  NOT_PERTINENT = 'NOT_PERTINENT',
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
