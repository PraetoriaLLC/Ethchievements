import EditIntegrationCell from 'src/components/Dev/Integration/EditIntegrationCell'

type IntegrationPageProps = {
  id: Int
}

const EditIntegrationPage = ({ id }: IntegrationPageProps) => {
  return <EditIntegrationCell id={id} />
}

export default EditIntegrationPage
