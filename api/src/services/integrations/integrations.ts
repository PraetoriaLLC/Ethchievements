import type { Prisma } from '@prisma/client'
import type { BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const integrations = () => {
  return db.integration.findMany()
}

export const integration = ({ id }: Prisma.IntegrationWhereUniqueInput) => {
  return db.integration.findUnique({
    where: { id },
  })
}

interface CreateIntegrationArgs {
  input: Prisma.IntegrationCreateInput
}

export const createIntegration = ({ input }: CreateIntegrationArgs) => {
  return db.integration.create({
    data: input,
  })
}

interface UpdateIntegrationArgs extends Prisma.IntegrationWhereUniqueInput {
  input: Prisma.IntegrationUpdateInput
}

export const updateIntegration = ({ id, input }: UpdateIntegrationArgs) => {
  return db.integration.update({
    data: input,
    where: { id },
  })
}

export const deleteIntegration = ({
  id,
}: Prisma.IntegrationWhereUniqueInput) => {
  return db.integration.delete({
    where: { id },
  })
}
