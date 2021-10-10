import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type RequirementLayoutProps = {
  children: React.ReactNode
}

const RequirementsLayout = ({ children }: RequirementLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.devRequirements()}
            className="rw-link"
          >
            Requirements
          </Link>
        </h1>
        <Link
          to={routes.devNewRequirement()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Requirement
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default RequirementsLayout
