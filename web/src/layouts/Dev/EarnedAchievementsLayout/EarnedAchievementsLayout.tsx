import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type EarnedAchievementLayoutProps = {
  children: React.ReactNode
}

const EarnedAchievementsLayout = ({ children }: EarnedAchievementLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.devEarnedAchievements()}
            className="rw-link"
          >
            EarnedAchievements
          </Link>
        </h1>
        <Link
          to={routes.devNewEarnedAchievement()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New EarnedAchievement
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default EarnedAchievementsLayout
