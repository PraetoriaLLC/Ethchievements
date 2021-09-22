import AchievementCell from 'src/components/Dev/Achievement/AchievementCell'

type AchievementPageProps = {
  id: String
}

const AchievementPage = ({ id }: AchievementPageProps) => {
  return <AchievementCell id={id} />
}

export default AchievementPage
