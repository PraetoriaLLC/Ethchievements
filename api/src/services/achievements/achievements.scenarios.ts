import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.AchievementCreateArgs>({
  achievement: {
    one: {
      name: 'String',
      img: 'String',
      integrationId: 2733948,
      description: 'String',
    },
    two: {
      name: 'String',
      img: 'String',
      integrationId: 7996002,
      description: 'String',
    },
  },
})

export type StandardScenario = typeof standard
