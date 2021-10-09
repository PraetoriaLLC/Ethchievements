import type { FindEarnedAchievements } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import EarnedAchievements from 'src/components/Dev/EarnedAchievement/EarnedAchievements'

export const QUERY = gql`
  query FindEarnedAchievements {
    earnedAchievements {
      id
      address
      achievementId
      awardedAt
      mintedAt
      isRare
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No earnedAchievements yet. '}
      <Link
        to={routes.devNewEarnedAchievement()}
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

export const Success = ({ earnedAchievements }: CellSuccessProps<FindEarnedAchievements>) => {
  return <EarnedAchievements earnedAchievements={earnedAchievements} />
}
