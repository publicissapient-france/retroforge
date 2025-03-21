import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import React, { useState } from 'react'

import type { Question } from '~/hammer-swipe/HammerSwipe'

import styles from './SwipeCard.module.css'

const angle = 5

const rotRandom = Array(100)
  .fill(0)
  .map(() => -angle + Math.random() * angle * 2)

export default function SwipeCard({ card, onRemove, index }: { card: Question; onRemove: () => void; index: number }) {
  const [initialRotation] = useState(rotRandom[index])
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-800, -600, -200, 0, 200, 600, 800], [-5, 0, 0, initialRotation, 0, 0, 5]) // Tilting effect
  const opacity = useTransform(x, [-1000, -800, -150, 0, 150, 800, 1000], [0, 0.8, 1, 1, 1, 0.8, 0]) // Updated opacity

  return (
    <motion.div
      initial={{ y: -1000, rotate: rotRandom[index], opacity: 1 }} // Drop from the top
      animate={{ y: 0, opacity: 1 }} // Drop down animation
      transition={{ type: 'spring', stiffness: 75, damping: 15, delay: index * 0.1 }} // Staggered effect
      drag="x"
      onDragEnd={(event, info) => {
        if (Math.abs(info.offset.x) > 200) {
          animate(x, info.offset.x > 0 ? 1000 : -1000, { type: 'spring', stiffness: 100, damping: 20 })
          setTimeout(onRemove, 1000)
        } else {
          animate(x, 0, { type: 'spring', stiffness: 200, damping: 15 })
        }
      }}
      style={{
        x,
        rotate,
        opacity,
        zIndex: 100 - index,
      }}
      className={`absolute w-75 h-105 ${styles.card}`}
    >
      <img className={styles.image} src="/assets/images/buffalo.png" alt={card.question} draggable={false} width={200} height={200} />
      <p className={styles.description}>{card.question}</p>
      <div className={styles.actions}>
        <div>Non</div>
        <div>Oui</div>
      </div>
    </motion.div>
  )
}
