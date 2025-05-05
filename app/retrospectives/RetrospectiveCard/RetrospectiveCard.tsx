import { motion } from 'framer-motion'

import { Retrospective } from '~/common/types/Restrospective'

export type RetrospectiveCardProps = {
  retrospective: Retrospective
}

export default function RetrospectiveCard({ retrospective }: RetrospectiveCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col text-center items-center rounded-4xl h-70 w-50 p-10 justify-start gap-4 shadow-2xl border-gray-100 border-[1px]"
    >
      <span className="text-4xl">{retrospective.emoji}</span>
      <h5 className="font-bold">{retrospective.name}</h5>
      <p className="text-xs">{retrospective.description}</p>
    </motion.div>
  )
}
