import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.IntegrationCreateArgs>({
  integration: {
    one: {
      name: 'String776097',
      description: 'String',
      logoUrl: 'String',
      baseUrl: 'String',
      color: 'String',
    },
    two: {
      name: 'String4664024',
      description: 'String',
      logoUrl: 'String',
      baseUrl: 'String',
      color: 'String',
    },
  },
})

export type StandardScenario = typeof standard
