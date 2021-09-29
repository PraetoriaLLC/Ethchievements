import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type IntegrationLayoutProps = {
  children: React.ReactNode
}

const IntegrationsLayout = ({ children }: IntegrationLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.devIntegrations()}
            className="rw-link"
          >
            Integrations
          </Link>
        </h1>
        <Link
          to={routes.devNewIntegration()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Integration
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default IntegrationsLayout
