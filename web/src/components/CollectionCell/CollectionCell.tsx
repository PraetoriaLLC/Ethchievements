import type { FindCollectionQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import AchievementCell from '../AchievementCell'
import { Paper } from '@material-ui/core'

export const QUERY = gql`
  query FindCollectionQuery($address: String!) {
    earnedAchievements: earnedAchievements(address: $address) {
      achievementId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div style={{textAlign: "center"}}><h3>This address hasn't claimed any achievements yet</h3></div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ earnedAchievements }: CellSuccessProps<FindCollectionQuery>) => {
  return <Paper elevation={4} style={{width: "80vw", margin: "auto", padding: "20px"}}>{earnedAchievements.map(({achievementId}) => <AchievementCell id={achievementId} />)}</Paper>
}
