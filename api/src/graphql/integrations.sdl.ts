export const schema = gql`
  type Integration {
    name: String!
    id: String!
    description: String!
    logoUrl: String!
    baseUrl: String!
    infoPath: String
    promoAchievementId: String
    color: String!
    secondaryColor: String
  }

  type Query {
    integrations: [Integration!]!
    integration(id: String!): Integration
  }

  input CreateIntegrationInput {
    name: String!
    description: String!
    logoUrl: String!
    baseUrl: String!
    infoPath: String
    promoAchievementId: String
    color: String!
    secondaryColor: String
  }

  input UpdateIntegrationInput {
    name: String
    description: String
    logoUrl: String
    baseUrl: String
    infoPath: String
    promoAchievementId: String
    color: String
    secondaryColor: String
  }

  type Mutation {
    createIntegration(input: CreateIntegrationInput!): Integration!
    updateIntegration(id: String!, input: UpdateIntegrationInput!): Integration!
    deleteIntegration(id: String!): Integration!
  }
`
