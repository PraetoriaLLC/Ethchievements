import {
  requirements,
  requirement,
  createRequirement,
  updateRequirement,
  deleteRequirement,
} from './requirements'
import type { StandardScenario } from './requirements.scenarios'

describe('requirements', () => {
  scenario('returns all requirements', async (scenario: StandardScenario) => {
    const result = await requirements()

    expect(result.length).toEqual(Object.keys(scenario.requirement).length)
  })

  scenario(
    'returns a single requirement',
    async (scenario: StandardScenario) => {
      const result = await requirement({ id: scenario.requirement.one.id })

      expect(result).toEqual(scenario.requirement.one)
    }
  )

  scenario('creates a requirement', async () => {
    const result = await createRequirement({
      input: { achievementId: 9928125, address: 'String', signature: 'String' },
    })

    expect(result.achievementId).toEqual(9928125)
    expect(result.address).toEqual('String')
    expect(result.signature).toEqual('String')
  })

  scenario('updates a requirement', async (scenario: StandardScenario) => {
    const original = await requirement({ id: scenario.requirement.one.id })
    const result = await updateRequirement({
      id: original.id,
      input: { achievementId: 1817788 },
    })

    expect(result.achievementId).toEqual(1817788)
  })

  scenario('deletes a requirement', async (scenario: StandardScenario) => {
    const original = await deleteRequirement({
      id: scenario.requirement.one.id,
    })
    const result = await requirement({ id: original.id })

    expect(result).toEqual(null)
  })
})
