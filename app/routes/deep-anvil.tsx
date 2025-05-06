import { useState } from 'react'
import { useNavigate } from 'react-router'

import { Computation, computeAppropriateRetroBasedOnScoring } from '~/common/computations/questions-compute'
import { useRetrospectiveContext } from '~/common/context/RetrospectiveContext'
import questions from '~/common/data/questions.json'
import retrospectives from '~/common/data/retrospectives.json'
import type { SelectResponse } from '~/deep-anvil/DeepAnvil'
import { SelectDeck } from '~/deep-anvil/SelectDeck/SelectDeck'
import i18n from '~/i18n'

export function meta() {
  return [
    { title: i18n.t('deepAnvil.title') },
    { name: 'description', content: i18n.t('deepAnvil.description') },
  ]
}

export default function DeepAnvilPage() {
  const { helper } = useRetrospectiveContext()
  const [answers, setAnswers] = useState<SelectResponse[]>([])
  const navigate = useNavigate()

  function selectedResponseHandler(id: string, response: SelectResponse) {
    setAnswers((prev) => prev.concat(response))
  }

  function onFinishedHandler() {
    const mappedResults: Computation[] = answers.map((result) => ({ id: result.id, question: result.label, response: { tags: result.tags } }))
    const computed = computeAppropriateRetroBasedOnScoring(mappedResults, retrospectives.retrospectives)
    helper.setResult(computed)
    navigate('/deep-anvil/match')
  }

  return <SelectDeck questions={questions.questions} onFinished={onFinishedHandler} onSelectedResponse={selectedResponseHandler} />
}
