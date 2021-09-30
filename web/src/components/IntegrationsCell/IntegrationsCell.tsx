import type { FindIntegrations } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { ListItem, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, TextField, Typography } from '@material-ui/core'
import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query FindIntegrations {
    integrations {
      name
      logoUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No integrations yet. '}
      <Link
        to={routes.devNewIntegration()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ integrations }: CellSuccessProps<FindIntegrations>) => {
  return (
    <Paper style={{position: "relative", bottom: "50px", width: "100%"}} elevation={3}>
      <span style={{padding: "10px", fontSize: "20px", position: "relative", top: "5px"}}>Integrations</span>
      <MenuList>
        {integrations.map(integrationMenuItem)}
      </MenuList>
    </Paper>
  )
}

const integrationMenuItem = integration => (<MenuItem>
  <ListItemIcon>
    <img src={integration.logoUrl} style={{width: "30px"}}/>
  </ListItemIcon>
  <ListItemText>
    {integration.name}
  </ListItemText>
</MenuItem>)
