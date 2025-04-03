import { useEffect, useState } from 'react'

import type { SelectQuestion, SelectResponse } from '~/deep-anvil/DeepAnvil'
import SelectCard from '~/deep-anvil/SelectCard/SelectCard'
import { SelectProgress } from '~/deep-anvil/SelectProgress/SelectProgress'

export type SelectDeckProps = {
  questions: SelectQuestion[]
  onSelectedResponse: (id: string, response: SelectResponse) => void
  onFinished: () => void
}

export function SelectDeck({ questions, onFinished, onSelectedResponse }: SelectDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState<SelectQuestion | undefined>(undefined)

  useEffect(() => {
    setCurrentQuestion(questions[currentIndex])
  }, [currentIndex, questions])

  async function handleSelectedResponse(id: string, response: SelectResponse) {
    onSelectedResponse(id, response)
    setCurrentQuestion(undefined)
    if (currentIndex >= questions.length - 1) {
      onFinished()
    } else {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <SelectProgress progress={currentIndex + 1} total={questions.length} />
      {currentQuestion !== undefined && (
        <SelectCard question={currentQuestion} onSelected={handleSelectedResponse} />
      )}
    </div>
  )
}