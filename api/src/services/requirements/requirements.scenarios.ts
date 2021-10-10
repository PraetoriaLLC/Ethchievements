import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RequirementCreateArgs>({
  requirement: {
    one: { achievementId: 8250940, address: 'String', signature: 'String' },
    two: { achievementId: 9906067, address: 'String', signature: 'String' },
  },
})

export type StandardScenario = typeof standard
