import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Dev/Achievement/AchievementsCell'

const DELETE_ACHIEVEMENT_MUTATION = gql`
  mutation DeleteAchievementMutation($id: Int!) {
    deleteAchievement(id: $id) {
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

const AchievementsList = ({ achievements }) => {
  const [deleteAchievement] = useMutation(DELETE_ACHIEVEMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Achievement deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete achievement ' + id + '?')) {
      deleteAchievement({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Img</th>
            <th>Integration id</th>
            <th>Questline id</th>
            <th>Description</th>
            <th>Action url</th>
            <th>Score</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {achievements.map((achievement) => (
            <tr key={achievement.id}>
              <td>{truncate(achievement.id)}</td>
              <td>{truncate(achievement.name)}</td>
              <td>{truncate(achievement.img)}</td>
              <td>{truncate(achievement.integrationId)}</td>
              <td>{truncate(achievement.questlineId)}</td>
              <td>{truncate(achievement.description)}</td>
              <td>{truncate(achievement.actionUrl)}</td>
              <td>{truncate(achievement.score)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.devAchievement({ id: achievement.id })}
                    title={'Show achievement ' + achievement.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.devEditAchievement({ id: achievement.id })}
                    title={'Edit achievement ' + achievement.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete achievement ' + achievement.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(achievement.id)}
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

export default AchievementsList
