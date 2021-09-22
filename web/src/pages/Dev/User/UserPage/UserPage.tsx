import UserCell from 'src/components/Dev/User/UserCell'

type UserPageProps = {
  id: String
}

const UserPage = ({ id }: UserPageProps) => {
  return <UserCell id={id} />
}

export default UserPage
