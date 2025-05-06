import { NavLink } from 'react-router'

import { Retrospective } from '~/common/types/Restrospective'
import RetrospectiveCard from '~/retrospectives/RetrospectiveCard/RetrospectiveCard'

export type RetrospectiveListingProps = {
  retrospectives: Retrospective[]
}

export default function RetrospectiveListing({ retrospectives }: RetrospectiveListingProps) {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {retrospectives.map((retrospective) => {
        if (retrospective.filename === 'Not-Implemented.md') {
          return <RetrospectiveCard key={retrospective.id} retrospective={retrospective} />
        }

        return (
          <NavLink key={retrospective.id} to={retrospective.id}>
            <RetrospectiveCard retrospective={retrospective} />
          </NavLink>
        )
      })}
    </div>
  )
}
