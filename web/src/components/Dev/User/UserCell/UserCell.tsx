import type { FindUserById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import User from 'src/components/Dev/User/User'

export const QUERY = gql`
  query FindUserById($id: String!) {
    user: user(id: $id) {
      id
      address
      authDetailId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>User not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ user }: CellSuccessProps<FindUserById>) => {
  return <User user={user} />
}
