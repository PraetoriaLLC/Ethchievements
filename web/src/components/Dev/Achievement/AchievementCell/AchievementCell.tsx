import type { FindAchievementById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Achievement from 'src/components/Dev/Achievement/Achievement'

export const QUERY = gql`
  query FindAchievementById($id: Int!) {
    achievement: achievement(id: $id) {
      id
      name
      img
      integrationId
      questlineId
      description
      actionUrl
      score
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Achievement not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ achievement }: CellSuccessProps<FindAchievementById>) => {
  return <Achievement achievement={achievement} />
}
