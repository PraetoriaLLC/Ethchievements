import type { AchievementsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Grid from "@material-ui/core/Grid"
import Achievement from '../Achievement/Achievement'


export const QUERY = gql`
  query AchievementsQuery {
    achievements {
      id
      name
      img
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ achievements }: CellSuccessProps<AchievementsQuery>) => {
  return (
    <Grid container spacing={2}>
      {achievements.map(ach => {
        return (
          <Grid item xs={3}>
            <Achievement ach={ach} />
          </Grid>
        )
      })}
    </Grid>
  )
}
