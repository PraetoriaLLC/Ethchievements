import type { EditEarnedAchievementById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import EarnedAchievementForm from 'src/components/Dev/EarnedAchievement/EarnedAchievementForm'

export const QUERY = gql`
  query EditEarnedAchievementById($id: Int!) {
    earnedAchievement: earnedAchievement(id: $id) {
      id
      address
      achievementId
      awardedAt
      mintedAt
      isRare
    }
  }
`
const UPDATE_EARNED_ACHIEVEMENT_MUTATION = gql`
  mutation UpdateEarnedAchievementMutation($id: Int!, $input: UpdateEarnedAchievementInput!) {
    updateEarnedAchievement(id: $id, input: $input) {
      id
      address
      achievementId
      awardedAt
      mintedAt
      isRare
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ earnedAchievement }: CellSuccessProps<EditEarnedAchievementById>) => {
  const [updateEarnedAchievement, { loading, error }] = useMutation(UPDATE_EARNED_ACHIEVEMENT_MUTATION, {
    onCompleted: () => {
      toast.success('EarnedAchievement updated')
      navigate(routes.devEarnedAchievements())
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { achievementId: parseInt(input.achievementId), })
    updateEarnedAchievement({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit EarnedAchievement {earnedAchievement.id}</h2>
      </header>
      <div className="rw-segment-main">
        <EarnedAchievementForm earnedAchievement={earnedAchievement} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
