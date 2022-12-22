import React from 'react'
import { render } from '@testing-library/react'
import Card from '../components/card'

describe('Test Card component', () => {
  it('renders with a custom children value', () => {
    const { container } = render(<Card>My card</Card>)
    expect(container.firstChild).toHaveTextContent('My card')
  })

  it('renders with a custom class name', () => {
    const { container } = render(
      <Card className="my-custom-class">My card</Card>
    )
    expect(container.firstChild).toHaveClass('my-custom-class')
  })
})
