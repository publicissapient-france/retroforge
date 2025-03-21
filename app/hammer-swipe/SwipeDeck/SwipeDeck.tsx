import { useState } from 'react'

import type { Question } from '~/hammer-swipe/HammerSwipe'
import SwipeCard from '~/hammer-swipe/SwipeCard/SwipeCard'

import styles from './SwipeDeck.module.css'

type SwipeDeckProps = {
  questions: Question[]
}

export default function SwipeDeck({ questions }: SwipeDeckProps) {
  const [cardStack, setCardStack] = useState(questions)

  const removeCard = (id: string) => {
    setCardStack((prev) => prev.filter((card) => card.id !== id))
  }

  return (
    <section className={styles.deck}>
      <div>
        {cardStack.map((card, index) => (
          <SwipeCard key={card.id} card={card} onRemove={() => removeCard(card.id)} index={index} />
        ))}
      </div>
    </section>
  )
}
