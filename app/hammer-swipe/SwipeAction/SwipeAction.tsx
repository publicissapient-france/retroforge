import { useTranslation } from 'react-i18next'

import { Action } from '~/hammer-swipe/HammerSwipe'

import NoImage from '../../../public/assets/images/button-no.svg'
import YesImage from '../../../public/assets/images/button-yes.svg'

export type SwipeActionProps = {
  type: Action
  onClick: (type: Action) => void
}

export default function SwipeAction({ type, onClick }: SwipeActionProps) {
  const { t } = useTranslation()

  return (
    <button className="flex justify-center items-center rounded-full cursor-pointer w-[80px] h-[80px] border border-[#d8d8d8] hover:bg-[#fafafa]" onClick={() => onClick(type)}>
      {type === Action.YES && <img className="w-[35px] h-[35px]" src={YesImage} alt={t('actions.yes')} />}
      {type === Action.NO && <img className="w-[25px] h-[25px]" src={NoImage} alt={t('actions.no')} />}
    </button>
  )
}
