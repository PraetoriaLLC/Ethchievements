import type { FindRequirements } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Requirements from 'src/components/Dev/Requirement/Requirements'

export const QUERY = gql`
  query FindRequirements {
    requirements {
      achievementId
      address
      signature
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No requirements yet. '}
      <Link
        to={routes.devNewRequirement()}
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

export const Success = ({ requirements }: CellSuccessProps<FindRequirements>) => {
  return <Requirements requirements={requirements} />
}
