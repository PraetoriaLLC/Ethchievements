import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      address: 'String9849579',
      authDetail: { create: { nonce: 'String' } },
    },
    two: {
      address: 'String2660646',
      authDetail: { create: { nonce: 'String' } },
    },
  },
})

export type StandardScenario = typeof standard
