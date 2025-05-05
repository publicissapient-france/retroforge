import { useTranslation } from 'react-i18next'

import { ButtonNo } from '~/common/components/Images/ButtonNo'
import { ButtonYes } from '~/common/components/Images/ButtonYes'
import { Action } from '~/hammer-swipe/HammerSwipe'

export type SwipeActionProps = {
  type: Action
  onClick: (type: Action) => void
}

export default function SwipeAction({ type, onClick }: SwipeActionProps) {
  const { t } = useTranslation()

  return (
    <button className="flex justify-center items-center rounded-full cursor-pointer w-[60px] h-[60px] border border-[#d8d8d8] dark:hover:bg-[#444444] hover:bg-[#fafafa]" onClick={() => onClick(type)} aria-label={t(type === Action.YES ? 'actions.yes' : 'actions.no')}>
      {type === Action.YES && <ButtonYes className="w-[25px] h-[20px] text-(--accent-color) dark:text-(--accent-color-dark)" />}
      {type === Action.NO && <ButtonNo className="w-[20px] h-[20px] text-black dark:text-white" />}
    </button>
  )
}
