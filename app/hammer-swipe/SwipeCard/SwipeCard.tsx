import { animate, motion, useMotionValue, useTransform, type ValueAnimationTransition } from 'framer-motion'
import React, { useState } from 'react'

import { Action, type Question } from '~/hammer-swipe/HammerSwipe'
import SwipeAction from '~/hammer-swipe/SwipeAction/SwipeAction'

import styles from './SwipeCard.module.css'

const angle = 5

const rotRandom = Array(100)
  .fill(0)
  .map(() => -angle + Math.random() * angle * 2)

const animationOptions: ValueAnimationTransition = { type: 'spring', stiffness: 100, damping: 20 }
const releaseOptions: ValueAnimationTransition = {
  ...animationOptions,
  damping: 15,
}

const CARD_ACTIONS_OFFSET = 1000

export type SwipeCardProps = {
  card: Question
  onRemove: (question: Question, action: Action) => void
  index: number
}

export default function SwipeCard({ card, onRemove, index }: SwipeCardProps) {
  const [initialRotation] = useState(rotRandom[index])
  const x = useMotionValue(0)
  const scale = useMotionValue(1)
  const rotate = useMotionValue(initialRotation)
  const opacity = useTransform(x, [-1000, -800, -150, 0, 150, 800, 1000], [0, 0.8, 1, 1, 1, 0.8, 0]) // Updated opacity

  function onActionPerformed(action: Action) {
    animate(x, CARD_ACTIONS_OFFSET * action.valueOf(), animationOptions)
    setTimeout(() => onRemove(card, action), 300)
  }

  return (
    <motion.div
      initial={{ y: -1000, rotate: initialRotation, opacity: 1 }} // Drop from the top
      animate={{ y: 0, opacity: 1 }} // Drop down animation
      transition={{ type: 'spring', stiffness: 75, damping: 15, delay: index * 0.1 }} // Staggered effect
      drag="x"
      onPointerDown={() => {
        animate(scale, 1.05)
        animate(rotate, 0)
      }}
      onPointerUp={() => {
        animate(scale, 1)
      }}
      onDragEnd={(event, info) => {
        if (Math.abs(info.offset.x) > 100) {
          const action = info.offset.x > 0 ? Action.YES : Action.NO
          onActionPerformed(action)
        } else {
          animate(x, 0, releaseOptions)
        }
      }}
      style={{
        x,
        scale,
        rotate,
        opacity,
        zIndex: 100 - index,
      }}
      className={`absolute w-75 h-125 ${styles.card}`}
    >
      <img className={styles.image} src="/assets/images/buffalo.png" alt={card.question} draggable={false} width={200} height={200} />
      <p className={styles.description}>{card.question}</p>
      <div className={styles.actions}>
        <SwipeAction type={Action.NO} onClick={onActionPerformed} />
        <SwipeAction type={Action.YES} onClick={onActionPerformed} />
      </div>
    </motion.div>
  )
}
