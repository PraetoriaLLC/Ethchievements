import {
  integrations,
  integration,
  createIntegration,
  updateIntegration,
  deleteIntegration,
} from './integrations'
import type { StandardScenario } from './integrations.scenarios'

describe('integrations', () => {
  scenario('returns all integrations', async (scenario: StandardScenario) => {
    const result = await integrations()

    expect(result.length).toEqual(Object.keys(scenario.integration).length)
  })

  scenario(
    'returns a single integration',
    async (scenario: StandardScenario) => {
      const result = await integration({ id: scenario.integration.one.id })

      expect(result).toEqual(scenario.integration.one)
    }
  )

  scenario('creates a integration', async () => {
    const result = await createIntegration({
      input: {
        name: 'String6452830',
        description: 'String',
        logoUrl: 'String',
        baseUrl: 'String',
        color: 'String',
      },
    })

    expect(result.name).toEqual('String6452830')
    expect(result.description).toEqual('String')
    expect(result.logoUrl).toEqual('String')
    expect(result.baseUrl).toEqual('String')
    expect(result.color).toEqual('String')
  })

  scenario('updates a integration', async (scenario: StandardScenario) => {
    const original = await integration({ id: scenario.integration.one.id })
    const result = await updateIntegration({
      id: original.id,
      input: { name: 'String94458052' },
    })

    expect(result.name).toEqual('String94458052')
  })

  scenario('deletes a integration', async (scenario: StandardScenario) => {
    const original = await deleteIntegration({
      id: scenario.integration.one.id,
    })
    const result = await integration({ id: original.id })

    expect(result).toEqual(null)
  })
})
