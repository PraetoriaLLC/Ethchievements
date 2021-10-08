import type { Prisma } from '@prisma/client'
import type { BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const achievements = () => {
  return db.achievement.findMany()
}

export const achievement = ({ id }: Prisma.AchievementWhereUniqueInput) => {
  return db.achievement.findUnique({
    where: { id },
  })
}

interface CreateAchievementArgs {
  input: Prisma.AchievementCreateInput
}

export const createAchievement = ({ input }: CreateAchievementArgs) => {
  return db.achievement.create({
    data: input,
  })
}

interface UpdateAchievementArgs extends Prisma.AchievementWhereUniqueInput {
  input: Prisma.AchievementUpdateInput
}

export const updateAchievement = ({ id, input }: UpdateAchievementArgs) => {
  return db.achievement.update({
    data: input,
    where: { id },
  })
}

export const deleteAchievement = ({
  id,
}: Prisma.AchievementWhereUniqueInput) => {
  return db.achievement.delete({
    where: { id },
  })
}

export const integrationAchievements = ({id}) => {
  return db.achievement.findMany({
    where: { integrationId: id}
  })
}
