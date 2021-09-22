import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type AchievementLayoutProps = {
  children: React.ReactNode
}

const AchievementsLayout = ({ children }: AchievementLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.devAchievements()}
            className="rw-link"
          >
            Achievements
          </Link>
        </h1>
        <Link
          to={routes.devNewAchievement()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Achievement
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default AchievementsLayout
