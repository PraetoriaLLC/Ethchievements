import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import AchievementsCell from 'src/components/AchievementsCell'
import { Container, Typography } from '@material-ui/core'
import ShowcaseIntegrationsCell from 'src/components/ShowcaseIntegrationsCell'
import { useAuth } from "@redwoodjs/auth"
import CollectionCell from 'src/components/CollectionCell'

const HomePage = () => {
  const { isAuthenticated, currentUser } = useAuth();
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
        <ShowcaseIntegrationsCell id={1} />
        </div>
        {isAuthenticated ? <div><h1>Your Collection</h1>
          <CollectionCell address={currentUser.address} /></div> : <></>}
        <h1>All Achievements</h1>
        <AchievementsCell />
      </Container>

    </>
  )
}

export default HomePage
