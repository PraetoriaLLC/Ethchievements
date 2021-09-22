import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      address: 'String1194953',
      authDetail: { create: { nonce: 'String' } },
    },
    two: {
      address: 'String8061458',
      authDetail: { create: { nonce: 'String' } },
    },
  },
})

export type StandardScenario = typeof standard
