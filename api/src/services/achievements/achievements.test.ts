import {
  achievements,
  achievement,
  createAchievement,
  updateAchievement,
  deleteAchievement,
} from './achievements'
import type { StandardScenario } from './achievements.scenarios'

describe('achievements', () => {
  scenario('returns all achievements', async (scenario: StandardScenario) => {
    const result = await achievements()

    expect(result.length).toEqual(Object.keys(scenario.achievement).length)
  })

  scenario(
    'returns a single achievement',
    async (scenario: StandardScenario) => {
      const result = await achievement({ id: scenario.achievement.one.id })

      expect(result).toEqual(scenario.achievement.one)
    }
  )

  scenario('creates a achievement', async () => {
    const result = await createAchievement({
      input: { name: 'String', img: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.img).toEqual('String')
  })

  scenario('updates a achievement', async (scenario: StandardScenario) => {
    const original = await achievement({ id: scenario.achievement.one.id })
    const result = await updateAchievement({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a achievement', async (scenario: StandardScenario) => {
    const original = await deleteAchievement({
      id: scenario.achievement.one.id,
    })
    const result = await achievement({ id: original.id })

    expect(result).toEqual(null)
  })
})
