import type { FindAchievementQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Achievement from '../Achievement/Achievement'

export const QUERY = gql`
  query FindAchievementQuery($id: Int!) {
    achievement: achievement(id: $id) {
      id
      name
      img
      score
      description
      actionUrl
      integrationId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ achievement }: CellSuccessProps<FindAchievementQuery>) => <Achievement ach={achievement} />
