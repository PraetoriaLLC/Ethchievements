import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Dev/EarnedAchievement/EarnedAchievementsCell'

const DELETE_EARNED_ACHIEVEMENT_MUTATION = gql`
  mutation DeleteEarnedAchievementMutation($id: Int!) {
    deleteEarnedAchievement(id: $id) {
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

const EarnedAchievementsList = ({ earnedAchievements }) => {
  const [deleteEarnedAchievement] = useMutation(DELETE_EARNED_ACHIEVEMENT_MUTATION, {
    onCompleted: () => {
      toast.success('EarnedAchievement deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete earnedAchievement ' + id + '?')) {
      deleteEarnedAchievement({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Address</th>
            <th>Achievement id</th>
            <th>Awarded at</th>
            <th>Minted at</th>
            <th>Is rare</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {earnedAchievements.map((earnedAchievement) => (
            <tr key={earnedAchievement.id}>
              <td>{truncate(earnedAchievement.id)}</td>
              <td>{truncate(earnedAchievement.address)}</td>
              <td>{truncate(earnedAchievement.achievementId)}</td>
              <td>{timeTag(earnedAchievement.awardedAt)}</td>
              <td>{timeTag(earnedAchievement.mintedAt)}</td>
              <td>{checkboxInputTag(earnedAchievement.isRare)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.devEarnedAchievement({ id: earnedAchievement.id })}
                    title={'Show earnedAchievement ' + earnedAchievement.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.devEditEarnedAchievement({ id: earnedAchievement.id })}
                    title={'Edit earnedAchievement ' + earnedAchievement.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete earnedAchievement ' + earnedAchievement.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(earnedAchievement.id)}
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

export default EarnedAchievementsList
