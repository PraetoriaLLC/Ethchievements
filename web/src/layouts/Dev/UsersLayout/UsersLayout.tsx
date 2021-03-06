import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type UserLayoutProps = {
  children: React.ReactNode
}

const UsersLayout = ({ children }: UserLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.devUsers()}
            className="rw-link"
          >
            Users
          </Link>
        </h1>
        <Link
          to={routes.devNewUser()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New User
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default UsersLayout
