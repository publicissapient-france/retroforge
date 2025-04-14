import { animate, motion, useMotionValue } from 'framer-motion'
import { useEffect } from 'react'

export type SelectProgressProps = {
  progress: number
  total: number
}

const CARD_WIDTH_LG = 800

export function SelectProgress({ progress, total }: SelectProgressProps) {
  const width = useMotionValue(Math.floor(CARD_WIDTH_LG / total) * progress)

  useEffect(() => {
    animate(width, Math.floor(CARD_WIDTH_LG / total) * progress)
  }, [progress, total])

  return (
    <div className={`w-[${CARD_WIDTH_LG}px] mb-5`}>
      <div className="relative">
        <div className="absolute w-full h-5 rounded-lg bg-blue-400" />
        <motion.div
          className="absolute h-5 bg-blue-700 rounded-lg"
          style={{ width }}
        />
        <div className="absolute flex h-5 justify-center items-center text-xs font-bold text-center w-full text-white">{progress} / {total}</div>
      </div>
    </div>
  )
}
