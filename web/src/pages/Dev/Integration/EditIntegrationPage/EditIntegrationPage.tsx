import EditIntegrationCell from 'src/components/Dev/Integration/EditIntegrationCell'

type IntegrationsPageProps = {
  id: String
}

const EditIntegrationPage = ({ id }: IntegrationsPageProps) => {
  return <EditIntegrationCell id={id} />
}

export default EditIntegrationPage
