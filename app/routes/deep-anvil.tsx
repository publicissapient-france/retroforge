import { useState } from 'react'

import questions from '~/common/data/questions.json'
import retrospectives from '~/common/data/retrospectives.json'
import { Flows } from '~/common/types/Flows'
import type { SelectResponse } from '~/deep-anvil/DeepAnvil'
import { SelectDeck } from '~/deep-anvil/SelectDeck/SelectDeck'
import { SelectResult } from '~/deep-anvil/SelectResult/SelectResult'
import i18n from '~/i18n'

export function meta() {
  return [
    { title: i18n.t('deepAnvil.title') },
    { name: 'description', content: i18n.t('deepAnvil.description') },
  ]
}

export default function DeepAnvilPage() {
  const [flow, setFlow] = useState(Flows.HOLD)
  const [answers, setAnswers] = useState<SelectResponse[]>([])

  function selectedResponseHandler(id: string, response: SelectResponse) {
    setAnswers((prev) => prev.concat(response))
    setFlow(Flows.PROGRESS)
  }

  function onFinishedHandler() {
    setFlow(Flows.FINISHED)
  }

  if (flow === Flows.FINISHED) {
    return <SelectResult results={answers} retrospectives={retrospectives.retrospectives} />
  }

  return <SelectDeck questions={questions.questions} onFinished={onFinishedHandler} onSelectedResponse={selectedResponseHandler} />
}
