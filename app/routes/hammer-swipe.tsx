import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

import Breadcrumb from '~/common/components/Breadcrumb/Breadcrumb'
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
  const { t } = useTranslation()
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

  const paths = [
    { path: '/', label: t('home.title') },
    { label: t('hammerSwipe.title') },
  ]

  return (
    <>
      <Breadcrumb className="z-2 fixed pl-[50px] mt-[calc(50px_+_var(--header-height))] max-[1100px]:p-[20px] max-[1100px]:mt-(--header-height)" paths={paths} />
      <SwipeDeck
        questions={swipes.questions}
        onQuestionAccepted={onQuestionAcceptedHandler}
        onFinished={onFinishedHandler}
      />
    </>
  )
}
