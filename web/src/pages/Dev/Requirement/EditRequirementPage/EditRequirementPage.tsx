import EditRequirementCell from 'src/components/Dev/Requirement/EditRequirementCell'

type RequirementPageProps = {
  id: Int
}

const EditRequirementPage = ({ id }: RequirementPageProps) => {
  return <EditRequirementCell id={id} />
}

export default EditRequirementPage
