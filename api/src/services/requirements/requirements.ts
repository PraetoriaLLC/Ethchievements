import type { Prisma } from '@prisma/client'
import type { BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const requirements = () => {
  return db.requirement.findMany()
}

export const requirement = ({ id }: Prisma.RequirementWhereUniqueInput) => {
  return db.requirement.findUnique({
    where: { id },
  })
}

interface CreateRequirementArgs {
  input: Prisma.RequirementCreateInput
}

export const createRequirement = ({ input }: CreateRequirementArgs) => {
  return db.requirement.create({
    data: input,
  })
}

interface UpdateRequirementArgs extends Prisma.RequirementWhereUniqueInput {
  input: Prisma.RequirementUpdateInput
}

export const updateRequirement = ({ id, input }: UpdateRequirementArgs) => {
  return db.requirement.update({
    data: input,
    where: { id },
  })
}

export const deleteRequirement = ({
  id,
}: Prisma.RequirementWhereUniqueInput) => {
  return db.requirement.delete({
    where: { id },
  })
}
