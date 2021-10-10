export const schema = gql`
  type Requirement {
    achievementId: Int!
    address: String!
    signature: String!
  }

  type Query {
    requirements: [Requirement!]!
    requirement(id: Int!): Requirement
  }

  input CreateRequirementInput {
    achievementId: Int!
    address: String!
    signature: String!
  }

  input UpdateRequirementInput {
    achievementId: Int
    address: String
    signature: String
  }

  type Mutation {
    createRequirement(input: CreateRequirementInput!): Requirement!
    updateRequirement(id: Int!, input: UpdateRequirementInput!): Requirement!
    deleteRequirement(id: Int!): Requirement!
  }
`
