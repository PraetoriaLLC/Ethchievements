import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Dev/Requirement/RequirementsCell'

const DELETE_REQUIREMENT_MUTATION = gql`
  mutation DeleteRequirementMutation($id: Int!) {
    deleteRequirement(id: $id) {
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

const RequirementsList = ({ requirements }) => {
  const [deleteRequirement] = useMutation(DELETE_REQUIREMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Requirement deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete requirement ' + id + '?')) {
      deleteRequirement({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Achievement id</th>
            <th>Address</th>
            <th>Signature</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {requirements.map((requirement) => (
            <tr key={requirement.id}>
              <td>{truncate(requirement.achievementId)}</td>
              <td>{truncate(requirement.address)}</td>
              <td>{truncate(requirement.signature)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.devRequirement({ id: requirement.id })}
                    title={'Show requirement ' + requirement.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.devEditRequirement({ id: requirement.id })}
                    title={'Edit requirement ' + requirement.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete requirement ' + requirement.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(requirement.id)}
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

export default RequirementsList
