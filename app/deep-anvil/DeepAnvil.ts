import type { Tags } from '~/common/types/Tags'
import { TranslatedField } from '~/common/types/TranslatedField'

export type SelectQuestion = {
  id: string
  question: TranslatedField
  responses: SelectResponse[]
}

export type SelectResponse = {
  id: string
  label: TranslatedField
  tags: Tags
}

