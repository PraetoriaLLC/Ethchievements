import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import AchievementsCell from 'src/components/AchievementsCell'
import { Container, Typography } from '@material-ui/core'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <Container style={{margin: "auto"}}>
        <Typography variant="h4" style={{margin: "10px"}}>All Ethchievements</Typography>
        <AchievementsCell />
      </Container>

    </>
  )
}

export default HomePage
