import React from 'react'
import { render } from '@testing-library/react'
import Loading from '../components/loading'

describe('Test Loading component', () => {
  it('If visible is true renders', () => {
    const { container } = render(<Loading visible={true} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('If visible is false does not render', () => {
    const { container } = render(<Loading visible={false} />)
    expect(container.firstChild).not.toBeInTheDocument()
  })

  it('If visible is true renders with a custom class name', () => {
    const { container } = render(
      <Loading visible={true} className="my-custom-class" />
    )
    expect(container.firstChild).toHaveClass('my-custom-class')
  })
})
