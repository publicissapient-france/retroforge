import type { Tags } from '~/common/types/Tags'

export enum Action {
  YES = 1,
  NO = -1,
}

export type Question = {
  id: string
  question: string
  tags: Tags
}

export type Questions = {
  questions: Question[]
}
