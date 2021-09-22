import { render } from '@redwoodjs/testing/web'

import Achievement from './Achievement'

describe('Achievement', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Achievement />)
    }).not.toThrow()
  })
})
