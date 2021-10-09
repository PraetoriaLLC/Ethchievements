import EarnedAchievementCell from 'src/components/Dev/EarnedAchievement/EarnedAchievementCell'

type EarnedAchievementPageProps = {
  id: Int
}

const EarnedAchievementPage = ({ id }: EarnedAchievementPageProps) => {
  return <EarnedAchievementCell id={id} />
}

export default EarnedAchievementPage
