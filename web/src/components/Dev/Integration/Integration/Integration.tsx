import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_INTEGRATION_MUTATION = gql`
  mutation DeleteIntegrationMutation($id: String!) {
    deleteIntegration(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Integration = ({ integration }) => {
  const [deleteIntegration] = useMutation(DELETE_INTEGRATION_MUTATION, {
    onCompleted: () => {
      toast.success('Integration deleted')
      navigate(routes.devIntegrations())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete integration ' + id + '?')) {
      deleteIntegration({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Integration {integration.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{integration.name}</td>
            </tr><tr>
              <th>Id</th>
              <td>{integration.id}</td>
            </tr><tr>
              <th>Description</th>
              <td>{integration.description}</td>
            </tr><tr>
              <th>Logo url</th>
              <td>{integration.logoUrl}</td>
            </tr><tr>
              <th>Base url</th>
              <td>{integration.baseUrl}</td>
            </tr><tr>
              <th>Info path</th>
              <td>{integration.infoPath}</td>
            </tr><tr>
              <th>Promo achievement id</th>
              <td>{integration.promoAchievementId}</td>
            </tr><tr>
              <th>Color</th>
              <td>{integration.color}</td>
            </tr><tr>
              <th>Secondary color</th>
              <td>{integration.secondaryColor}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.devEditIntegration({ id: integration.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(integration.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Integration
