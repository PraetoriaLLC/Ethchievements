import RequirementCell from 'src/components/Dev/Requirement/RequirementCell'

type RequirementPageProps = {
  id: Int
}

const RequirementPage = ({ id }: RequirementPageProps) => {
  return <RequirementCell id={id} />
}

export default RequirementPage
