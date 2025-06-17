import React, { useEffect,useState } from 'react'

import { Action, type Question } from '~/hammer-swipe/HammerSwipe'
import SwipeCard from '~/hammer-swipe/SwipeCard/SwipeCard'

import styles from './SwipeDeck.module.css'

type SwipeDeckProps = {
  questions: Question[]
  onQuestionAccepted: (question: Question) => void
  onFinished: () => void
}

export default function SwipeDeck({ questions, onQuestionAccepted, onFinished }: SwipeDeckProps) {
  const [clientSide, setClientSide] = useState(false)
  const [cardStack, setCardStack] = useState(questions)
  const total = React.useMemo(() => cardStack.length, [])
  const [answeredCount, setAnsweredCount] = useState(0)

  useEffect(() => {
    setClientSide(true)
  }, [])

  useEffect(() => {
    if (answeredCount === questions.length) {
      onFinished()
    }
  }, [answeredCount])

  const onResponseHandler = (question: Question, action: Action) => {
    setAnsweredCount(answeredCount + 1)
    if (action === Action.YES) {
      onQuestionAccepted(question)
    }
  }

  const onAnimationTerminatedHandler = (question: Question) => {
    setCardStack((prev) => prev.filter((card) => card.id !== question.id))
  }

  return (
    clientSide && (
      <section className={styles.deck}>
        <div>
          {cardStack.map((card, index) => (
            <SwipeCard key={card.id} card={card} onResponse={onResponseHandler} onRemove={onAnimationTerminatedHandler} index={index} total={total} />
          ))}
        </div>
      </section>
    )
  )
}
