import type { EditAchievementById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import AchievementForm from 'src/components/Dev/Achievement/AchievementForm'

export const QUERY = gql`
  query EditAchievementById($id: Int!) {
    achievement: achievement(id: $id) {
      id
      name
      img
      integrationId
      questlineId
      description
      actionUrl
      score
    }
  }
`
const UPDATE_ACHIEVEMENT_MUTATION = gql`
  mutation UpdateAchievementMutation($id: Int!, $input: UpdateAchievementInput!) {
    updateAchievement(id: $id, input: $input) {
      id
      name
      img
      integrationId
      questlineId
      description
      actionUrl
      score
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ achievement }: CellSuccessProps<EditAchievementById>) => {
  const [updateAchievement, { loading, error }] = useMutation(UPDATE_ACHIEVEMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Achievement updated')
      navigate(routes.devAchievements())
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { integrationId: parseInt(input.integrationId), questlineId: parseInt(input.questlineId), })
    updateAchievement({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Achievement {achievement.id}</h2>
      </header>
      <div className="rw-segment-main">
        <AchievementForm achievement={achievement} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
