import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import AchievementsCell from 'src/components/AchievementsCell'
import { Container, Typography } from '@material-ui/core'
import ShowcaseIntegrationCell from 'src/components/ShowcaseIntegrationCell'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <Container style={{minWidth: "90%", margin: "auto"}}>
        <div style={{marginTop: "15px", marginBottom: "30px"}}>
        <ShowcaseIntegrationCell id="d79ef80d-b463-45e2-8ff8-f57e173f389b" />
        </div>
        <AchievementsCell />
      </Container>

    </>
  )
}

export default HomePage
