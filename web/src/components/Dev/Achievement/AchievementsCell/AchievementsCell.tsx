import type { FindAchievements } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Achievements from 'src/components/Dev/Achievement/Achievements'

export const QUERY = gql`
  query FindAchievements {
    achievements {
      id
      name
      img
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No achievements yet. '}
      <Link
        to={routes.devNewAchievement()}
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

export const Success = ({ achievements }: CellSuccessProps<FindAchievements>) => {
  return <Achievements achievements={achievements} />
}
