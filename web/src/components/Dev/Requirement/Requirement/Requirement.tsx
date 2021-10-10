import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_REQUIREMENT_MUTATION = gql`
  mutation DeleteRequirementMutation($id: Int!) {
    deleteRequirement(id: $id) {
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

const Requirement = ({ requirement }) => {
  const [deleteRequirement] = useMutation(DELETE_REQUIREMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Requirement deleted')
      navigate(routes.devRequirements())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete requirement ' + id + '?')) {
      deleteRequirement({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Requirement {requirement.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Achievement id</th>
              <td>{requirement.achievementId}</td>
            </tr><tr>
              <th>Address</th>
              <td>{requirement.address}</td>
            </tr><tr>
              <th>Signature</th>
              <td>{requirement.signature}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.devEditRequirement({ id: requirement.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(requirement.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Requirement
