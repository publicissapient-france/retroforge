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
    <div style={{ rotate: `${rotation}deg` }} className={`${className} flex flex-col items-center rounded-4xl w-[clamp(260px,24vw,335px)] h-[clamp(350px,28vw,440px)] p-[clamp(1.5rem,2.2vw,2.5rem)] justify-between shadow-2xl`}>
      {icon}
      <p className="uppercase text-[clamp(1.55rem,2.1vw,2.1rem)] leading-[1.05] font-bold">{question}</p>
      <div className="flex w-full justify-between px-[clamp(0.2rem,0.5vw,0.6rem)]">
        {children}
      </div>
    </div>
  )
}
