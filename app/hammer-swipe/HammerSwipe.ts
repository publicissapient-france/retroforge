import type { Tags } from '~/common/types/Tags'
import { TranslatedField } from '~/common/types/TranslatedField'

export enum Action {
  YES = 1,
  NO = -1,
}

export type Question = {
  id: string
  question: TranslatedField
  tags: Tags
}

export type Questions = {
  questions: Question[]
}
