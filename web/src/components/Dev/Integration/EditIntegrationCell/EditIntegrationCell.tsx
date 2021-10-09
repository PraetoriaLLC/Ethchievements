import type { EditIntegrationById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import IntegrationForm from 'src/components/Dev/Integration/IntegrationForm'

export const QUERY = gql`
  query EditIntegrationById($id: Int!) {
    integration: integration(id: $id) {
      name
      id
      description
      logoUrl
      baseUrl
      infoUrl
      promoAchievementId
      color
      secondaryColor
    }
  }
`
const UPDATE_INTEGRATION_MUTATION = gql`
  mutation UpdateIntegrationMutation($id: Int!, $input: UpdateIntegrationInput!) {
    updateIntegration(id: $id, input: $input) {
      name
      id
      description
      logoUrl
      baseUrl
      infoUrl
      promoAchievementId
      color
      secondaryColor
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ integration }: CellSuccessProps<EditIntegrationById>) => {
  const [updateIntegration, { loading, error }] = useMutation(UPDATE_INTEGRATION_MUTATION, {
    onCompleted: () => {
      toast.success('Integration updated')
      navigate(routes.devIntegrations())
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { promoAchievementId: parseInt(input.promoAchievementId), })
    updateIntegration({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Integration {integration.id}</h2>
      </header>
      <div className="rw-segment-main">
        <IntegrationForm integration={integration} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
