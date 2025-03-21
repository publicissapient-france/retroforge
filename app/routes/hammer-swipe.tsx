import React from 'react'

import questions from '~/common/data/questions.json'
import SwipeDeck from '~/hammer-swipe/SwipeDeck/SwipeDeck'
import i18n from '~/i18n'

export function meta() {
  return [{ title: i18n.t('hammerSwipe.title') }, { name: 'description', content: i18n.t('hammerSwipe.description') }]
}

export default function HammerSwipePage() {
  return <SwipeDeck questions={questions.questions} />
}
