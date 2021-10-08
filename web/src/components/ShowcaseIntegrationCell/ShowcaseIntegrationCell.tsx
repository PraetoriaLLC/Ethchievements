import type { FindIntegrationById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Paper, Grid, Button, Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query FindIntegration($id: Int!) {
    integration: integration(id: $id) {
      name
      id
      description
      logoUrl
      baseUrl
      infoUrl
      promoAchievementId
      color
      secondaryColor
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Integration not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ integration }: CellSuccessProps<FindIntegrationById>) => {
  const background = integration.secondaryColor ? { background: `linear-gradient(to right bottom, ${integration.color}, ${integration.secondaryColor})`} : { backgroundColor: integration.color}
  return (
    <Paper style={{width: "100%", ...background, minHeight: "400px", padding: "15px"}}>
      <Grid container>
        <Grid item xs={8}>
          <div style={{width: "80%", margin: "auto", marginTop: "40px"}}>
            <div>
              <img src={integration.logoUrl} style={{height: "60px"}} />
              <span style={{fontSize: "45px", position: "relative", left: "10px", bottom: "12px"}}>{integration.name}</span>
            </div>
            <p style={{fontSize: "18px"}}>{integration.description}</p>
            <div>
              <Button variant="contained" size="large" style={{marginRight: "10px"}}>Get Started</Button>
              <Button variant="outlined" size="large">Learn More</Button>
            </div>
          </div>
        </Grid>

        <Grid xs={4}>
        <div style={{marginLeft: "80px"}}>
          <img src="https://pbs.twimg.com/profile_images/1186270065085370368/J1YJtvdI_400x400.jpg" style={{width: "300px", borderRadius: "5px"}} />
            <span style={{display: 'block', fontSize: "25px"}}>Saaver</span>
            <span style={{display: 'block'}}>Make a deposit in Aave</span>
            <Link to="/i/aave" style={{textDecoration: "none", color: "aquamarine"}}>View more achievements for {integration.name}</Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}
