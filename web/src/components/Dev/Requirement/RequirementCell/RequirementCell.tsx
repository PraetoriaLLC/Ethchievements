import type { FindRequirementById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Requirement from 'src/components/Dev/Requirement/Requirement'

export const QUERY = gql`
  query FindRequirementById($id: Int!) {
    requirement: requirement(id: $id) {
      achievementId
      address
      signature
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Requirement not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ requirement }: CellSuccessProps<FindRequirementById>) => {
  return <Requirement requirement={requirement} />
}
