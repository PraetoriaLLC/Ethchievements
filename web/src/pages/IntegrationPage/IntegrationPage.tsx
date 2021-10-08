import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import IntegrationAchievementsCell from 'src/components/IntegrationAchievementsCell'
import IntegrationCell from 'src/components/IntegrationCell'

const IntegrationPage = () => {
  return (
    <div style={{marginTop: "25px"}}>
      <MetaTags
        title="Integration"
        // description="Integration description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <IntegrationCell id={1}/>
      <IntegrationAchievementsCell id={1} />
    </div>
  )
}

export default IntegrationPage
