import { useEffect, useState } from 'react'

import { Action, type Question } from '~/hammer-swipe/HammerSwipe'
import SwipeCard from '~/hammer-swipe/SwipeCard/SwipeCard'

import styles from './SwipeDeck.module.css'

type SwipeDeckProps = {
  questions: Question[]
}

export default function SwipeDeck({ questions }: SwipeDeckProps) {
  const [clientSide, setClientSide] = useState(false)
  const [cardStack, setCardStack] = useState(questions)

  useEffect(() => {
    setClientSide(true)
  }, [])

  const removeCard = (id: string, action: Action) => {
    setCardStack((prev) => prev.filter((card) => card.id !== id))
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
