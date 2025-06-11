import { motion } from 'framer-motion'
import { ReactNode } from 'react'

import { useCurrentLanguage } from '~/common/hooks/UseCurrentLanguage'
import { Retrospective } from '~/common/types/Restrospective'

export type RetrospectiveCardSize = 'small' | 'medium' | 'large'
export type RetrospectiveCardColor = 'gold' | 'silver' | 'bronze' | 'neutral'

export type RetrospectiveCardProps = {
  retrospective: Retrospective
  size?: RetrospectiveCardSize
  color?: RetrospectiveCardColor
  icon?: ReactNode
}

const classBySize = {
  small: 'rounded-3xl h-65 w-50 p-10 gap-2 shadow-2xl',
  large: 'rounded-4xl h-75 w-50 p-10 gap-5 shadow-2xl',
  medium: 'rounded-4xl h-70 w-50 p-10 gap-4 shadow-2xl',
}

const classByColor = {
  neutral: 'border-gray-200 shadow-gray-100 border-[1px] bg-white dark:bg-gray-700',
  gold: 'border-[#D3AF37] bg-[#fcf9ed] shadow-[#D3AF37] border-[1px] dark:bg-gray-700',
  silver: 'border-[#C4C4C4] shadow-[#C4C4C4] border-[1px] bg-[#f9f9f9] dark:bg-gray-700',
  bronze: 'border-[#CE8946] shadow-[#CE8946] border-[1px] bg-[#fcf4eb] dark:bg-gray-700',
}

export default function RetrospectiveCard({ retrospective, icon, size = 'medium', color = 'neutral' }: RetrospectiveCardProps) {
  const sizeClasses = classBySize[size]
  const colorClasses = classByColor[color]
  const { currentLanguage } = useCurrentLanguage()

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`${sizeClasses} ${colorClasses} relative flex flex-col text-center items-center justify-start`}
    >
      {icon && <span className="absolute top-[-15px] text-4xl">{icon}</span>}
      <span className="text-4xl">{retrospective.emoji}</span>
      <h5 className="font-bold">{retrospective.name[currentLanguage]}</h5>
      <p className="text-xs">{retrospective.description[currentLanguage]}</p>
    </motion.div>
  )
}
