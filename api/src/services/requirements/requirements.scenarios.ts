import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RequirementCreateArgs>({
  requirement: {
    one: { achievementId: 7009556, address: 'String', signature: 'String' },
    two: { achievementId: 126989, address: 'String', signature: 'String' },
  },
})

export type StandardScenario = typeof standard
