import type { FindIntegrationById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Carousel from 'react-material-ui-carousel'
import IntegrationShowcase from 'src/components/IntegrationShowcase'

export const QUERY = gql`
  query FindIntegrations {
    integrations {
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

export const Success = ({ integrations }: CellSuccessProps<FindIntegrationById>) => {

  return (
    <Carousel interval={6000} animation="slide">
      {
        integrations.map((item, i) => <IntegrationShowcase integration={item} key={i} />)
      }
    </Carousel>
  )
}


