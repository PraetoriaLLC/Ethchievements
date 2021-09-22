import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_ACHIEVEMENT_MUTATION = gql`
  mutation DeleteAchievementMutation($id: String!) {
    deleteAchievement(id: $id) {
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

const Achievement = ({ achievement }) => {
  const [deleteAchievement] = useMutation(DELETE_ACHIEVEMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Achievement deleted')
      navigate(routes.devAchievements())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete achievement ' + id + '?')) {
      deleteAchievement({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Achievement {achievement.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{achievement.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{achievement.name}</td>
            </tr><tr>
              <th>Img</th>
              <td>{achievement.img}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.devEditAchievement({ id: achievement.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(achievement.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Achievement
