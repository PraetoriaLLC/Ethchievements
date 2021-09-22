import EditAchievementCell from 'src/components/Dev/Achievement/EditAchievementCell'

type AchievementPageProps = {
  id: String
}

const EditAchievementPage = ({ id }: AchievementPageProps) => {
  return <EditAchievementCell id={id} />
}

export default EditAchievementPage
