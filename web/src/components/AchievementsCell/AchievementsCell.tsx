import type { AchievementsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Grid from "@material-ui/core/Grid"
import Achievement from '../Achievement/Achievement'
import { ListItem, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, TextField } from '@material-ui/core'
import IntegrationsCell from '../IntegrationsCell'


export const QUERY = gql`
  query AchievementsQuery {
    achievements {
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

export const Success = ({ achievements }: CellSuccessProps<AchievementsQuery>) => {
  return (
    <>
      <TextField size="medium" label="Search Achievements" style={{marginBottom: "20px", marginLeft: "5px", width: "400px"}}/>
      <Grid container>
        <Grid item xs={10}>
          <Grid container spacing={0}>
            {achievements.map(ach => {
              return (
                <Grid item xs={3}>
                  <Achievement ach={ach} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item xs={2}>
            <IntegrationsCell />
        </Grid>
      </Grid>
    </>
  )
}
