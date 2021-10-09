import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_EARNED_ACHIEVEMENT_MUTATION = gql`
  mutation DeleteEarnedAchievementMutation($id: Int!) {
    deleteEarnedAchievement(id: $id) {
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

const EarnedAchievement = ({ earnedAchievement }) => {
  const [deleteEarnedAchievement] = useMutation(DELETE_EARNED_ACHIEVEMENT_MUTATION, {
    onCompleted: () => {
      toast.success('EarnedAchievement deleted')
      navigate(routes.devEarnedAchievements())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete earnedAchievement ' + id + '?')) {
      deleteEarnedAchievement({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">EarnedAchievement {earnedAchievement.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{earnedAchievement.id}</td>
            </tr><tr>
              <th>Address</th>
              <td>{earnedAchievement.address}</td>
            </tr><tr>
              <th>Achievement id</th>
              <td>{earnedAchievement.achievementId}</td>
            </tr><tr>
              <th>Awarded at</th>
              <td>{timeTag(earnedAchievement.awardedAt)}</td>
            </tr><tr>
              <th>Minted at</th>
              <td>{timeTag(earnedAchievement.mintedAt)}</td>
            </tr><tr>
              <th>Is rare</th>
              <td>{checkboxInputTag(earnedAchievement.isRare)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.devEditEarnedAchievement({ id: earnedAchievement.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(earnedAchievement.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default EarnedAchievement
