import React, { useState } from 'react'
import { useNavigate } from 'react-router'

import { Computation, computeAppropriateRetroBasedOnScoring } from '~/common/computations/questions-compute'
import { useRetrospectiveContext } from '~/common/context/RetrospectiveContext'
import retrospectives from '~/common/data/retrospectives.json'
import swipes from '~/common/data/swipes.json'
import type { Question } from '~/hammer-swipe/HammerSwipe'
import SwipeDeck from '~/hammer-swipe/SwipeDeck/SwipeDeck'
import i18n from '~/i18n'

export function meta() {
  return [
    { title: i18n.t('hammerSwipe.title') },
    { name: 'description', content: i18n.t('hammerSwipe.description') },
  ]
}

export default function HammerSwipePage() {
  const { helper } = useRetrospectiveContext()
  const [answers, setAnswers] = useState<Question[]>([])
  const navigate = useNavigate()

  function onQuestionAcceptedHandler(question: Question) {
    setAnswers((prev) => prev.concat(question))
  }

  function onFinishedHandler() {
    const mappedResults: Computation[] = answers.map((result) => ({ id: result.id, question: result.question, response: { tags: result.tags } }))
    const computed = computeAppropriateRetroBasedOnScoring(mappedResults, retrospectives.retrospectives)
    helper.setResult(computed)
    navigate('/hammer-swipe/match')
  }

  return (
    <SwipeDeck
      questions={swipes.questions}
      onQuestionAccepted={onQuestionAcceptedHandler}
      onFinished={onFinishedHandler}
    />
  )
}
