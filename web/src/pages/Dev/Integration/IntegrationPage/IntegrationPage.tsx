import IntegrationCell from 'src/components/Dev/Integration/IntegrationCell'

type IntegrationsPageProps = {
  id: String
}

const IntegrationPage = ({ id }: IntegrationsPageProps) => {
  return <IntegrationCell id={id} />
}

export default IntegrationPage
