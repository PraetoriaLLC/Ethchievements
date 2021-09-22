export const schema = gql`
  type Achievement {
    id: String!
    name: String!
    img: String!
  }

  type Query {
    achievements: [Achievement!]!
    achievement(id: String!): Achievement
  }

  input CreateAchievementInput {
    name: String!
    img: String!
  }

  input UpdateAchievementInput {
    name: String
    img: String
  }

  type Mutation {
    createAchievement(input: CreateAchievementInput!): Achievement!
    updateAchievement(id: String!, input: UpdateAchievementInput!): Achievement!
    deleteAchievement(id: String!): Achievement!
  }
`
