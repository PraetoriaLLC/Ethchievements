import { Paper, Grid, Button } from "@material-ui/core"
import { Link, navigate, routes } from "@redwoodjs/router"
import AchievementCell from "src/components/AchievementCell"

const IntegrationShowcase = ({integration}) => {
  const background = integration.secondaryColor ? { background: `linear-gradient(to right bottom, ${integration.color}, ${integration.secondaryColor})`} : { backgroundColor: integration.color}
  return (
    <Paper style={{width: "100%", ...background, minHeight: "400px", padding: "15px"}}>
      <Grid container>
        <Grid item xs={9}>
          <div style={{width: "80%", margin: "auto", marginTop: "40px"}}>
            <div>
              <img src={integration.logoUrl} style={{height: "60px"}} />
              <span style={{fontSize: "45px", position: "relative", left: "10px", bottom: "12px"}}>{integration.name}</span>
            </div>
            <p style={{fontSize: "18px"}}>{integration.description}</p>
            <div>
              <Button onClick={() => window.open(integration.baseUrl)} variant="contained" size="large" style={{marginRight: "10px"}}>Get Started</Button>
              <Button onClick={() => window.open(integration.infoUrl)} variant="outlined" size="large">Learn More</Button>
            </div>
            <Link to={routes.integration({id: integration.id})} style={{position: "relative", top: "15px"}}> View all achievements for {integration.name} </Link>
          </div>
        </Grid>

        <Grid xs={3}>
          <div style={{margin: "auto", marginTop: "25px", width: "250px"}}>
            <AchievementCell id={integration.promoAchievementId}/>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default IntegrationShowcase

{/* <div style={{marginLeft: "80px"}}>
          <img src="https://pbs.twimg.com/profile_images/1186270065085370368/J1YJtvdI_400x400.jpg" style={{width: "300px", borderRadius: "5px"}} />
            <span style={{display: 'block', fontSize: "25px"}}>Saaver</span>
            <span style={{display: 'block'}}>Make a deposit in Aave</span>
            <Link to="/i/aave" style={{textDecoration: "none", color: "aquamarine"}}>View more achievements for {integration.name}</Link>
          </div> */}
