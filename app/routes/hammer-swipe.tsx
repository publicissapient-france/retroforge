import React, { useState } from 'react'

import questions from '~/common/data/questions.json'
import type { Question } from '~/hammer-swipe/HammerSwipe'
import SwipeDeck from '~/hammer-swipe/SwipeDeck/SwipeDeck'
import i18n from '~/i18n'

export function meta() {
  return [{ title: i18n.t('hammerSwipe.title') }, { name: 'description', content: i18n.t('hammerSwipe.description') }]
}

enum HammerSwipeFlow {
  HOLD,
  PROGRESS,
  FINISHED,
}

export default function HammerSwipePage() {
  const [flow, setFlow] = useState(HammerSwipeFlow.HOLD)
  const [answers, setAnswers] = useState<Question[]>([])

  function onQuestionAcceptedHandler(question: Question) {
    setAnswers((prev) => prev.concat(question))
    setFlow(HammerSwipeFlow.PROGRESS)
  }

  function onFinishedHandler() {
    setFlow(HammerSwipeFlow.FINISHED)
  }

  if (flow === HammerSwipeFlow.FINISHED) {
    return <p>Results : {answers.length}</p>
  }

  return (
    <>
      <SwipeDeck questions={questions.questions} onQuestionAccepted={onQuestionAcceptedHandler} onFinished={onFinishedHandler} />
    </>
  )
}
