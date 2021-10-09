import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.EarnedAchievementCreateArgs>({
  earnedAchievement: {
    one: {
      address: 'String',
      achievementId: 9825992,
      awardedAt: '2021-10-09T01:06:54Z',
    },
    two: {
      address: 'String',
      achievementId: 4763725,
      awardedAt: '2021-10-09T01:06:54Z',
    },
  },
})

export type StandardScenario = typeof standard
