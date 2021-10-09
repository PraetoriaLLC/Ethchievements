import {
  earnedAchievements,
  earnedAchievement,
  createEarnedAchievement,
  updateEarnedAchievement,
  deleteEarnedAchievement,
} from './earnedAchievements'
import type { StandardScenario } from './earnedAchievements.scenarios'

describe('earnedAchievements', () => {
  scenario(
    'returns all earnedAchievements',
    async (scenario: StandardScenario) => {
      const result = await earnedAchievements()

      expect(result.length).toEqual(
        Object.keys(scenario.earnedAchievement).length
      )
    }
  )

  scenario(
    'returns a single earnedAchievement',
    async (scenario: StandardScenario) => {
      const result = await earnedAchievement({
        id: scenario.earnedAchievement.one.id,
      })

      expect(result).toEqual(scenario.earnedAchievement.one)
    }
  )

  scenario('creates a earnedAchievement', async () => {
    const result = await createEarnedAchievement({
      input: {
        address: 'String',
        achievementId: 6164220,
        awardedAt: '2021-10-09T01:06:54Z',
      },
    })

    expect(result.address).toEqual('String')
    expect(result.achievementId).toEqual(6164220)
    expect(result.awardedAt).toEqual('2021-10-09T01:06:54Z')
  })

  scenario(
    'updates a earnedAchievement',
    async (scenario: StandardScenario) => {
      const original = await earnedAchievement({
        id: scenario.earnedAchievement.one.id,
      })
      const result = await updateEarnedAchievement({
        id: original.id,
        input: { address: 'String2' },
      })

      expect(result.address).toEqual('String2')
    }
  )

  scenario(
    'deletes a earnedAchievement',
    async (scenario: StandardScenario) => {
      const original = await deleteEarnedAchievement({
        id: scenario.earnedAchievement.one.id,
      })
      const result = await earnedAchievement({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
