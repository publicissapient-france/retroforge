import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import React from 'react'

import type { SelectQuestion, SelectResponse } from '~/deep-anvil/DeepAnvil'

import styles from './SelectCard.module.css'

export type SelectCardProp = {
  question: SelectQuestion
  onSelected: (id: string, response: SelectResponse) => void
}

export default function SelectCard({ question, onSelected }: SelectCardProp) {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-1000, -800, -150, 0, 150, 800, 1000], [0, 0.8, 1, 1, 1, 0.8, 0])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>, response: SelectResponse) {
    animate(x, -1500, { type: 'spring', stiffness: 75, damping: 15 })
    setTimeout(() => onSelected(question.id, response), 400)
  }

  return (
    <motion.div
      initial={{ x: 1500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 75, damping: 15 }}
      style={{ x, opacity }}
      className="rounded-[15px] lg:w-[800px] sm:w-[550px] max-sm:w-[300px] m-5 border border-[#EEEEEE] bg-white dark:bg-gray-800 box-border p-[40px] shadow-[0_2px_8px_-4px_rgba(0,0,0,0.2)] uppercase"
    >
      <img className="lg:w-[256px] sm:w-[200px] max-sm:w-[128px] m-auto" src="/images/buffalo.png" alt={question.question} draggable={false} />
      <div className="lg:text-base sm:text-sm max-sm:text-xs font-bold border border-t-0 border-l-0 border-r-0 border-b-[#EEEEEE] pb-[20px] mb-[20px] text-center">{question.question}</div>
      <ul className={`flex flex-col gap-2 ${styles['select-card']}`}>
        {question.responses.map((response) => (
          <li className="flex flex-row cursor-pointer w-full border border-[#EEEEEE] px-[10px] dark:hover:bg-gray-700 hover:bg-[#FAFAFA] text-sm" key={response.label}>
            <input className="cursor-pointer" id={response.id} type="radio" value={response.id} name={question.id} onChange={(event) => handleChange(event, response)} />
            <label htmlFor={response.id} className="lg:text-sm sm:text-xs max-sm:text-[10px] w-full py-3 ms-2 cursor-pointer block">{response.label}</label>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
