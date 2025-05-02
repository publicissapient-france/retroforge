import React from 'react'

import SwipeAction from '~/common/components/SwipeAction/SwipeAction'
import { Action } from '~/hammer-swipe/HammerSwipe'

export type HomeCardProps = {
  className: string | undefined
  rotation?: number
  icon: React.ReactNode
  question: string
}

export default function HomeCard({ className, icon, question, rotation = 0 }: HomeCardProps) {
  return (
    <div style={{ rotate: `${rotation}deg` }} className={`${className} flex flex-col items-center rounded-4xl max-md:w-[300px] md:w-[335px] max-md:h-90 md:h-110 p-10 justify-between shadow-2xl`}>
      {icon}
      <p className="uppercase text-3xl font-bold">{question}</p>
      <div className="flex w-full justify-between px-2">
        <SwipeAction type={Action.NO} />
        <SwipeAction type={Action.YES} />
      </div>
    </div>
  )
}
