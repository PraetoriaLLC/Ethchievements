import type { Prisma } from '@prisma/client'
import type { BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const earnedAchievements = ({address}) => {
  return db.earnedAchievement.findMany({
    where: { address }
  })
}

export const score = async ({address}) => {
  const scorePromises = await db.earnedAchievement.findMany({
    where: { address },
    select: { achievementId: true}
  })
  .then(achievements => achievements.map(ach => db.achievement.findFirst({where: {id: ach.achievementId}, select: {score: true}})))

  return (await Promise.all(scorePromises)).reduce((total, ach) => total + ach.score, 0)

}

export const earnedAchievement = ({
  id,
}: Prisma.EarnedAchievementWhereUniqueInput) => {
  return db.earnedAchievement.findUnique({
    where: { id },
  })
}

interface CreateEarnedAchievementArgs {
  input: Prisma.EarnedAchievementCreateInput
}

export const createEarnedAchievement = ({
  input,
}: CreateEarnedAchievementArgs) => {
  return db.earnedAchievement.create({
    data: input,
  })
}

interface UpdateEarnedAchievementArgs
  extends Prisma.EarnedAchievementWhereUniqueInput {
  input: Prisma.EarnedAchievementUpdateInput
}

export const updateEarnedAchievement = ({
  id,
  input,
}: UpdateEarnedAchievementArgs) => {
  return db.earnedAchievement.update({
    data: input,
    where: { id },
  })
}

export const deleteEarnedAchievement = ({
  id,
}: Prisma.EarnedAchievementWhereUniqueInput) => {
  return db.earnedAchievement.delete({
    where: { id },
  })
}
