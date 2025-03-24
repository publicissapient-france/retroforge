import { useEffect, useState } from 'react'

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

  useEffect(() => {
    setClientSide(true)
  }, [])

  const removeCard = (question: Question, action: Action) => {
    setCardStack((prev) => prev.filter((card) => card.id !== question.id))
    if (action === Action.YES) {
      onQuestionAccepted(question)
    }
    if (cardStack.length <= 1) {
      onFinished()
    }
  }

  return (
    clientSide && (
      <section className={styles.deck}>
        <div>
          {cardStack.map((card, index) => (
            <SwipeCard key={card.id} card={card} onRemove={removeCard} index={index} />
          ))}
        </div>
      </section>
    )
  )
}
