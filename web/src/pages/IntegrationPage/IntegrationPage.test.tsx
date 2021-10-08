import { render } from '@redwoodjs/testing/web'

import IntegrationPage from './IntegrationPage'

describe('IntegrationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IntegrationPage />)
    }).not.toThrow()
  })
})
