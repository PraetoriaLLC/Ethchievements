import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import AchievementForm from 'src/components/Dev/Achievement/AchievementForm'

const CREATE_ACHIEVEMENT_MUTATION = gql`
  mutation CreateAchievementMutation($input: CreateAchievementInput!) {
    createAchievement(input: $input) {
      id
    }
  }
`

const NewAchievement = () => {
  const [createAchievement, { loading, error }] = useMutation(CREATE_ACHIEVEMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Achievement created')
      navigate(routes.devAchievements())
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { integrationId: parseInt(input.integrationId), questlineId: parseInt(input.questlineId), })
    createAchievement({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Achievement</h2>
      </header>
      <div className="rw-segment-main">
        <AchievementForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAchievement
