import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.AchievementCreateArgs>({
  achievement: {
    one: { name: 'String', img: 'String' },
    two: { name: 'String', img: 'String' },
  },
})

export type StandardScenario = typeof standard
