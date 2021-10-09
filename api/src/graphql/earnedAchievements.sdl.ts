export const schema = gql`
  type EarnedAchievement {
    id: Int!
    address: String!
    achievementId: Int!
    awardedAt: DateTime!
    mintedAt: DateTime
    isRare: Boolean
  }

  type Query {
    earnedAchievements(address: String!): [EarnedAchievement!]!
    earnedAchievement(id: Int!): EarnedAchievement
  }

  input CreateEarnedAchievementInput {
    address: String!
    achievementId: Int!
    awardedAt: DateTime!
    mintedAt: DateTime
    isRare: Boolean
  }

  input UpdateEarnedAchievementInput {
    address: String
    achievementId: Int
    awardedAt: DateTime
    mintedAt: DateTime
    isRare: Boolean
  }

  type Mutation {
    createEarnedAchievement(
      input: CreateEarnedAchievementInput!
    ): EarnedAchievement!
    updateEarnedAchievement(
      id: Int!
      input: UpdateEarnedAchievementInput!
    ): EarnedAchievement!
    deleteEarnedAchievement(id: Int!): EarnedAchievement!
  }
`
