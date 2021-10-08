import type { FindIntegrationById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Integration from 'src/components/Dev/Integration/Integration'

export const QUERY = gql`
  query FindIntegrationById($id: Int!) {
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
  return <Integration integration={integration} />
}
