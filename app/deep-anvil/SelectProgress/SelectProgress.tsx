import { animate, motion, useMotionValue } from 'framer-motion'
import { useEffect, useRef } from 'react'

export type SelectProgressProps = {
  progress: number
  total: number
}

export function SelectProgress({ progress, total }: SelectProgressProps) {
  const progressRef = useRef<HTMLDivElement>(null)
  const width = useMotionValue(0)

  useEffect(() => {
    const elementWidth = progressRef?.current?.clientWidth ?? 800
    animate(width, (elementWidth / total) * progress)
  }, [progress, total])

  return (
    <motion.div
      initial={{ x: -1500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 75, damping: 15 }}      ref={progressRef}
      className="lg:w-[800px] sm:w-[550px] max-sm:w-[300px] mb-5"
    >
      <div className="relative">
        <div className="absolute w-full h-5 rounded-lg bg-blue-400" />
        <motion.div
          className="absolute h-5 bg-blue-700 rounded-lg"
          style={{ width }}
        />
        <div className="absolute flex h-5 justify-center items-center text-xs font-bold text-center w-full text-white">{progress} / {total}</div>
      </div>
    </motion.div>
  )
}
