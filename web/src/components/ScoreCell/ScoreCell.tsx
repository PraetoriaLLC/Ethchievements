import type { FindScoreQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindScoreQuery($address: String!) {
    score: score(address: $address)
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ score }: CellSuccessProps<FindScoreQuery>) => {
  return <span style={{float: "right", backgroundColor: "aquamarine", color: "white", borderRadius: "10px", padding: "5px", fontSize: "16px", position: "relative", top: "5px"}}>Total Score: {score}</span>
}
