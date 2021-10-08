import IntegrationCell from 'src/components/Dev/Integration/IntegrationCell'

type IntegrationPageProps = {
  id: Int
}

const IntegrationPage = ({ id }: IntegrationPageProps) => {
  return <IntegrationCell id={id} />
}

export default IntegrationPage
