import type { IntegrationAchievementsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Grid from "@material-ui/core/Grid"
import Achievement from '../Achievement/Achievement'


export const QUERY = gql`
  query IntegrationAchievementsQuery {
    integrationAchievements {
      id
      name
      img
      score
      description
      actionUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ integrationAchievements }: CellSuccessProps<IntegrationAchievementsQuery>) => {
  return (
    <div style={{width: "65vw", margin: "auto", marginTop: "30px"}}>
      <span style={{color: "aquamarine", fontSize: "42px"}}>{integrationAchievements.length}  </span>
      <span>Achievement{integrationAchievements.length > 1 ? "s" : ""}</span>
      <Grid container spacing={0} style={{marginTop: "10px"}}>
        {integrationAchievements.map(ach => {
          return (
            <Grid item xs={3}>
              <Achievement ach={ach} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
