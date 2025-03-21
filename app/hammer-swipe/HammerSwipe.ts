export type Question = {
  id: string
  question: string
  score: Record<string, number>
}

export type Questions = {
  questions: Question[]
}
