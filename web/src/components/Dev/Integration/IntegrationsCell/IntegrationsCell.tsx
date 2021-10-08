import type { FindIntegrations } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Integrations from 'src/components/Dev/Integration/Integrations'

export const QUERY = gql`
  query FindIntegrations {
    integrations {
      name
      id
      description
      logoUrl
      baseUrl
      infoUrl
      promoAchievementId
      color
      secondaryColor
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No integrations yet. '}
      <Link
        to={routes.devNewIntegration()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ integrations }: CellSuccessProps<FindIntegrations>) => {
  return <Integrations integrations={integrations} />
}
