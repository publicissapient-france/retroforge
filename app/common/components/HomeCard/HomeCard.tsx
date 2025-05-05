import React, { PropsWithChildren } from 'react'

export type HomeCardProps = {
  className: string | undefined
  rotation?: number
  icon: React.ReactNode
  question: string
}

export type HomeCardActionProps = {
  icon: React.ReactNode
}

export function HomeCardAction({ icon }: HomeCardActionProps) {
  return (
    <div className="flex justify-center items-center rounded-full max-md:w-[40px] max-md:h-[40px] md:w-[60px] md:h-[60px] border border-[#d8d8d8]">
      {icon}
    </div>
  )
}

export default function HomeCard({ children, className, icon, question, rotation = 0 }: PropsWithChildren<HomeCardProps>) {
  return (
    <div style={{ rotate: `${rotation}deg` }} className={`${className} flex flex-col items-center rounded-4xl max-md:w-[300px] md:w-[335px] max-md:h-90 md:h-110 p-10 justify-between shadow-2xl`}>
      {icon}
      <p className="uppercase text-3xl font-bold">{question}</p>
      <div className="flex w-full justify-between px-2">
        {children}
      </div>
    </div>
  )
}
