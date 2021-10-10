import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import RequirementForm from 'src/components/Dev/Requirement/RequirementForm'

const CREATE_REQUIREMENT_MUTATION = gql`
  mutation CreateRequirementMutation($input: CreateRequirementInput!) {
    createRequirement(input: $input) {
      id
    }
  }
`

const NewRequirement = () => {
  const [createRequirement, { loading, error }] = useMutation(CREATE_REQUIREMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Requirement created')
      navigate(routes.devRequirements())
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { achievementId: parseInt(input.achievementId), })
    createRequirement({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Requirement</h2>
      </header>
      <div className="rw-segment-main">
        <RequirementForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRequirement
