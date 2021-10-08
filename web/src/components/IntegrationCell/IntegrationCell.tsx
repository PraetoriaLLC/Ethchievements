import type { FindIntegrationQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Paper } from '@material-ui/core'

export const QUERY = gql`
  query FindIntegrationQuery($id: Int!) {
    integration: integration(id: $id) {
      id
      name
      logoUrl
      description
      baseUrl
      infoUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ integration }: CellSuccessProps<FindIntegrationQuery>) => {
  return (
  <div>
    <Paper elevation={4} style={{width: "65vw", margin: "auto", padding: "40px"}}>
      <div>
        <img src={integration.logoUrl} style={{height: '60px'}} />
        <span style={{fontSize: "42px", position: "relative", left: "15px", bottom: "13px"}}>{integration.name}</span>
        <p>{integration.description}</p>
        <a href={integration.baseUrl} style={{marginRight: "20px"}}>{integration.name} Website</a>
        <a href={integration.infoUrl}>{integration.name} Information</a>
      </div>
    </Paper>
  </div>
  )
}
