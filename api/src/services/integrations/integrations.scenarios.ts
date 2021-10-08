import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.IntegrationCreateArgs>({
  integration: {
    one: {
      name: 'String4484460',
      description: 'String',
      logoUrl: 'String',
      baseUrl: 'String',
      color: 'String',
    },
    two: {
      name: 'String8789348',
      description: 'String',
      logoUrl: 'String',
      baseUrl: 'String',
      color: 'String',
    },
  },
})

export type StandardScenario = typeof standard
