import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Button from '../components/button'

describe('Test Button component', () => {
  it('renders', () => {
    render(<Button>My button</Button>)
  })

  it('renders with a custom children value', () => {
    const { container } = render(<Button>My button</Button>)
    expect(container.firstChild).toHaveTextContent('My button')
  })

  it('calls onClick', () => {
    const onClick = jest.fn()
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>)
    fireEvent.click(getByText('Click me'))
    expect(onClick).toHaveBeenCalled()
  })

  it('renders with a custom class name', () => {
    const { container } = render(
      <Button className="my-custom-class">My button</Button>
    )
    expect(container.firstChild).toHaveClass('my-custom-class')
  })

  it('renders correct type', () => {
    const { container } = render(<Button type="submit">My button</Button>)
    expect(container.firstChild).toHaveAttribute('type', 'submit')
  })
})
