export const schema = gql`
  type Integration {
    name: String!
    id: Int!
    description: String!
    logoUrl: String!
    baseUrl: String!
    infoUrl: String
    promoAchievementId: String
    color: String!
    secondaryColor: String
  }

  type Query {
    integrations: [Integration!]!
    integration(id: Int!): Integration
  }

  input CreateIntegrationInput {
    name: String!
    description: String!
    logoUrl: String!
    baseUrl: String!
    infoUrl: String
    promoAchievementId: String
    color: String!
    secondaryColor: String
  }

  input UpdateIntegrationInput {
    name: String
    description: String
    logoUrl: String
    baseUrl: String
    infoUrl: String
    promoAchievementId: String
    color: String
    secondaryColor: String
  }

  type Mutation {
    createIntegration(input: CreateIntegrationInput!): Integration!
    updateIntegration(id: Int!, input: UpdateIntegrationInput!): Integration!
    deleteIntegration(id: Int!): Integration!
  }
`
