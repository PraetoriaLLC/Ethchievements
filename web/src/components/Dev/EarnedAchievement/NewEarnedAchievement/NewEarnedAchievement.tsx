import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import EarnedAchievementForm from 'src/components/Dev/EarnedAchievement/EarnedAchievementForm'

const CREATE_EARNED_ACHIEVEMENT_MUTATION = gql`
  mutation CreateEarnedAchievementMutation($input: CreateEarnedAchievementInput!) {
    createEarnedAchievement(input: $input) {
      id
    }
  }
`

const NewEarnedAchievement = () => {
  const [createEarnedAchievement, { loading, error }] = useMutation(CREATE_EARNED_ACHIEVEMENT_MUTATION, {
    onCompleted: () => {
      toast.success('EarnedAchievement created')
      navigate(routes.devEarnedAchievements())
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { achievementId: parseInt(input.achievementId), })
    createEarnedAchievement({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New EarnedAchievement</h2>
      </header>
      <div className="rw-segment-main">
        <EarnedAchievementForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewEarnedAchievement
