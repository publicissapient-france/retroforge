import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router'

import { Retrospective } from '~/common/types/Restrospective'
import RetrospectiveCard from '~/retrospectives/RetrospectiveCard/RetrospectiveCard'

export type RetrospectiveListingProps = {
  retrospectives: Retrospective[]
}

export default function RetrospectiveListing({ retrospectives }: RetrospectiveListingProps) {
  const { t } = useTranslation()
  return (
    <>
      <h3 className="mb-5 font-bold">{t('retrospectives.title')}</h3>
      <div className="flex flex-wrap gap-6 justify-center">
        {retrospectives.map((retrospective) => {
          if (retrospective.filename === 'Not-Implemented.md') {
            return <RetrospectiveCard key={retrospective.id} retrospective={retrospective} />
          }

          return (
            <NavLink key={retrospective.id} to={`/retrospectives/${retrospective.id}`}>
              <RetrospectiveCard retrospective={retrospective} />
            </NavLink>
          )
        })}
      </div>
    </>
  )
}