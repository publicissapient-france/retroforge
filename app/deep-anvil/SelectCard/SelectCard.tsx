import { animate, motion, useMotionValue } from 'framer-motion'
import React from 'react'

import type { SelectQuestion, SelectResponse } from '~/deep-anvil/DeepAnvil'

import styles from './SelectCard.module.css'

export type SelectCardProp = {
  question: SelectQuestion
  onSelected: (id: string, response: SelectResponse) => void
}

export default function SelectCard({ question, onSelected }: SelectCardProp) {
  const y = useMotionValue(0)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>, response: SelectResponse) {
    animate(y, 2000, { type: 'spring', stiffness: 75, damping: 15 })
    setTimeout(() => onSelected(question.id, response), 400)
  }

  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 75, damping: 15 }}
      style={{ y }}
      className="rounded-[15px] w-[800px] m-auto border border-[#EEEEEE] box-border p-[40px] shadow-[0_2px_8px_-4px_rgba(0,0,0,0.2)] uppercase"
    >
      <img className="max-md:w-36 lg:w-50 m-auto" src="/images/buffalo.png" alt={question.question} draggable={false} width={200} height={200} />
      <div className="font-bold border border-t-0 border-l-0 border-r-0 border-b-[#EEEEEE] pb-[20px] mb-[20px] text-center">{question.question}</div>
      <ul className={`flex flex-col gap-2 ${styles['select-card']}`}>
        {question.responses.map((response) => (
          <li className="flex flex-row cursor-pointer w-full border border-[#EEEEEE] px-[10px] hover:bg-[#FAFAFA] text-sm" key={response.label}>
            <input className="cursor-pointer" id={response.id} type="radio" value={response.id} name={question.id} onChange={(event) => handleChange(event, response)} />
            <label htmlFor={response.id} className="w-full py-3 ms-2 cursor-pointer block">{response.label}</label>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
