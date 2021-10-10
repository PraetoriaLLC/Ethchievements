import type { EditRequirementById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import RequirementForm from 'src/components/Dev/Requirement/RequirementForm'

export const QUERY = gql`
  query EditRequirementById($id: Int!) {
    requirement: requirement(id: $id) {
      achievementId
      address
      signature
    }
  }
`
const UPDATE_REQUIREMENT_MUTATION = gql`
  mutation UpdateRequirementMutation($id: Int!, $input: UpdateRequirementInput!) {
    updateRequirement(id: $id, input: $input) {
      achievementId
      address
      signature
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ requirement }: CellSuccessProps<EditRequirementById>) => {
  const [updateRequirement, { loading, error }] = useMutation(UPDATE_REQUIREMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Requirement updated')
      navigate(routes.devRequirements())
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { achievementId: parseInt(input.achievementId), })
    updateRequirement({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Requirement {requirement.id}</h2>
      </header>
      <div className="rw-segment-main">
        <RequirementForm requirement={requirement} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
