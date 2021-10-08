import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Dev/Integration/IntegrationsCell'

const DELETE_INTEGRATION_MUTATION = gql`
  mutation DeleteIntegrationMutation($id: Int!) {
    deleteIntegration(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const IntegrationsList = ({ integrations }) => {
  const [deleteIntegration] = useMutation(DELETE_INTEGRATION_MUTATION, {
    onCompleted: () => {
      toast.success('Integration deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete integration ' + id + '?')) {
      deleteIntegration({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Description</th>
            <th>Logo url</th>
            <th>Base url</th>
            <th>Info url</th>
            <th>Promo achievement id</th>
            <th>Color</th>
            <th>Secondary color</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {integrations.map((integration) => (
            <tr key={integration.id}>
              <td>{truncate(integration.name)}</td>
              <td>{truncate(integration.id)}</td>
              <td>{truncate(integration.description)}</td>
              <td>{truncate(integration.logoUrl)}</td>
              <td>{truncate(integration.baseUrl)}</td>
              <td>{truncate(integration.infoUrl)}</td>
              <td>{truncate(integration.promoAchievementId)}</td>
              <td>{truncate(integration.color)}</td>
              <td>{truncate(integration.secondaryColor)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.devIntegration({ id: integration.id })}
                    title={'Show integration ' + integration.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.devEditIntegration({ id: integration.id })}
                    title={'Edit integration ' + integration.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete integration ' + integration.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(integration.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default IntegrationsList
