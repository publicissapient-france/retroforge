import { useTranslation } from 'react-i18next'

import NoImage from '~/common/assets/images/button-no.svg'
import YesImage from '~/common/assets/images/button-yes.svg'
import { Action } from '~/hammer-swipe/HammerSwipe'

export type SwipeActionProps = {
  type: Action
  onClick: (type: Action) => void
}

export default function SwipeAction({ type, onClick }: SwipeActionProps) {
  const { t } = useTranslation()

  return (
    <button className="flex justify-center items-center rounded-full cursor-pointer max-md:w-[60px] max-md:h-[60px] md:w-[80px] md:h-[80px] border border-[#d8d8d8] dark:hover:bg-[#444444] hover:bg-[#fafafa]" onClick={() => onClick(type)}>
      {type === Action.YES && <img className="max-md:w-[20px] max-md:h-[20px] md:w-[35px] md:h-[35px]" src={YesImage} alt={t('actions.yes')} />}
      {type === Action.NO && <img className="max-md:w-[15px] max-md:h-[15px] md:w-[25px] md:h-[25px]" src={NoImage} alt={t('actions.no')} />}
    </button>
  )
}
