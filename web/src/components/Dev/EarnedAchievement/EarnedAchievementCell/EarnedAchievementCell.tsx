import type { FindEarnedAchievementById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import EarnedAchievement from 'src/components/Dev/EarnedAchievement/EarnedAchievement'

export const QUERY = gql`
  query FindEarnedAchievementById($id: Int!) {
    earnedAchievement: earnedAchievement(id: $id) {
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

export const Empty = () => <div>EarnedAchievement not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ earnedAchievement }: CellSuccessProps<FindEarnedAchievementById>) => {
  return <EarnedAchievement earnedAchievement={earnedAchievement} />
}
