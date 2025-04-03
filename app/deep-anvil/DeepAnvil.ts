import type { Tags } from '~/common/types/Tags'

export type SelectQuestion = {
  id: string
  question: string
  responses: SelectResponse[]
}

export type SelectResponse = {
  id: string
  value: string
  tags: Tags
}

