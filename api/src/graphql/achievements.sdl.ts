export const schema = gql`
  type Achievement {
    id: Int!
    name: String!
    img: String!
    integrationId: Int!
    questlineId: Int
    description: String!
    actionUrl: String
    score: Int
  }

  type Query {
    achievements: [Achievement!]!
    integrationAchievements: [Achievement!]!
    achievement(id: Int!): Achievement
  }

  input CreateAchievementInput {
    name: String!
    img: String!
    integrationId: Int!
    questlineId: Int
    description: String!
    actionUrl: String
    score: Int
  }

  input UpdateAchievementInput {
    name: String
    img: String
    integrationId: Int
    questlineId: Int
    description: String
    actionUrl: String
    score: Int
  }

  type Mutation {
    createAchievement(input: CreateAchievementInput!): Achievement!
    updateAchievement(id: Int!, input: UpdateAchievementInput!): Achievement!
    deleteAchievement(id: Int!): Achievement!
  }
`
