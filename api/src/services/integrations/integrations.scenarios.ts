import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.IntegrationCreateArgs>({
  integration: {
    one: {
      name: 'String8829021',
      description: 'String',
      logoUrl: 'String',
      baseUrl: 'String',
      color: 'String',
    },
    two: {
      name: 'String489374',
      description: 'String',
      logoUrl: 'String',
      baseUrl: 'String',
      color: 'String',
    },
  },
})

export type StandardScenario = typeof standard
