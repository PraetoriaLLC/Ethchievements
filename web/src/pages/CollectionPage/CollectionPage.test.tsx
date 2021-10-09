import { render } from '@redwoodjs/testing/web'

import CollectionPage from './CollectionPage'

describe('CollectionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CollectionPage />)
    }).not.toThrow()
  })
})
