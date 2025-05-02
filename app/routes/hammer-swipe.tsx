import React, { useState } from 'react'

import { Wave } from '~/common/components/Wave/Wave'
import retrospectives from '~/common/data/retrospectives.json'
import swipes from '~/common/data/swipes.json'
import { Flows } from '~/common/types/Flows'
import type { Question } from '~/hammer-swipe/HammerSwipe'
import SwipeDeck from '~/hammer-swipe/SwipeDeck/SwipeDeck'
import SwipeResult from '~/hammer-swipe/SwipeResult/SwipeResult'
import i18n from '~/i18n'

export function meta() {
  return [
    { title: i18n.t('hammerSwipe.title') },
    { name: 'description', content: i18n.t('hammerSwipe.description') },
  ]
}

export default function HammerSwipePage() {
  const [flow, setFlow] = useState(Flows.HOLD)
  const [answers, setAnswers] = useState<Question[]>([])

  function onQuestionAcceptedHandler(question: Question) {
    setAnswers((prev) => prev.concat(question))
    setFlow(Flows.PROGRESS)
  }

  function onFinishedHandler() {
    setFlow(Flows.FINISHED)
  }

  if (flow === Flows.FINISHED) {
    return <SwipeResult
      results={answers}
      retrospectives={retrospectives.retrospectives}
    />
  }

  return (
    <SwipeDeck
      questions={swipes.questions}
      onQuestionAccepted={onQuestionAcceptedHandler}
      onFinished={onFinishedHandler}
    />
  )
}
