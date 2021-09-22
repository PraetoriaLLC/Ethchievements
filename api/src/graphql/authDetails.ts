export const schema = gql`
  type AuthDetail {
    id: String!
    nonce: String!
    timestamp: DateTime!
    User: User
  }
  type Query {
    authDetails: [AuthDetail!]!
  }
  input CreateAuthDetailInput {
    nonce: String!
    timestamp: DateTime!
  }
  input UpdateAuthDetailInput {
    nonce: String
    timestamp: DateTime
  }
  type Mutation {
    authChallenge(input: AuthChallengeInput!): AuthChallengeResult
    authVerify(input: AuthVerifyInput!): AuthVerifyResult
  }

  input AuthChallengeInput {
    address: String!
  }

  type AuthChallengeResult {
    message: String!
  }

  input AuthVerifyInput {
    signature: String!
    address: String!
  }

  type AuthVerifyResult {
    token: String!
  }
`
