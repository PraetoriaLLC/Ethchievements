import { render } from '@redwoodjs/testing/web'

import IntegrationShowcase from './IntegrationShowcase'

describe('IntegrationShowcase', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IntegrationShowcase />)
    }).not.toThrow()
  })
})
