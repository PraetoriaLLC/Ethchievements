import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import CollectionCell from 'src/components/CollectionCell'

const CollectionPage = ({address}) => {
  return (
    <>
      <MetaTags
        title="Collection"
        // description="Collection description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1 style={{marginLeft: "10vw"}}>{address}'s Collection</h1>
      <CollectionCell address={address} />

    </>
  )
}

export default CollectionPage
