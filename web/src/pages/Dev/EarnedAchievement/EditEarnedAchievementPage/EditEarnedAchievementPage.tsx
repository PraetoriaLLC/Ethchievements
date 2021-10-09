import EditEarnedAchievementCell from 'src/components/Dev/EarnedAchievement/EditEarnedAchievementCell'

type EarnedAchievementPageProps = {
  id: Int
}

const EditEarnedAchievementPage = ({ id }: EarnedAchievementPageProps) => {
  return <EditEarnedAchievementCell id={id} />
}

export default EditEarnedAchievementPage
