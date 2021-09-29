import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import IntegrationForm from 'src/components/Dev/Integration/IntegrationForm'

const CREATE_INTEGRATION_MUTATION = gql`
  mutation CreateIntegrationMutation($input: CreateIntegrationInput!) {
    createIntegration(input: $input) {
      id
    }
  }
`

const NewIntegration = () => {
  const [createIntegration, { loading, error }] = useMutation(CREATE_INTEGRATION_MUTATION, {
    onCompleted: () => {
      toast.success('Integration created')
      navigate(routes.devIntegrations())
    },
  })

  const onSave = (input) => {
    createIntegration({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Integration</h2>
      </header>
      <div className="rw-segment-main">
        <IntegrationForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewIntegration
