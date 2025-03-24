export enum Action {
  YES = 1,
  NO = -1,
}

export type Question = {
  id: string
  question: string
  score: Record<string, number>
}

export type Questions = {
  questions: Question[]
}
