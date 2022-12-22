import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Input from '../components/Input'

describe('Test Input component', () => {
  it('renders', () => {
    render(<Input value={'Moi!'} />)
  })

  it('renders with a custom label value', () => {
    const { container } = render(
      <Input label={'Subject'} value={'Testing...'} />
    )
    expect(container.firstChild).toHaveTextContent('Subject')
  })

  it('renders with a custom value', () => {
    const { container } = render(<Input value={'Testing...'} />)
    expect(container.firstChild).toHaveAttribute('value', 'Testing...')
  })

  it('renders with a custom class name', () => {
    const { container } = render(
      <Input className="my-custom-class" value={'Testing...'} />
    )
    expect(container.firstChild).toHaveClass('my-custom-class')
  })

  it('calls onChange', () => {
    const onChange = jest.fn()
    const testID = 'contact-form-subject'

    const { getByTestId } = render(
      <Input
        testID={testID}
        label={'Subject'}
        value={'My name is'}
        onChange={onChange}
      />
    )

    const message = 'My name is Aleix'
    const input = getByTestId(testID)
    fireEvent.change(input, { target: { value: message } })

    expect(onChange).toHaveBeenCalledWith(message)
  })

  it('renders correct type', () => {
    const { container } = render(<Input type="submit" value={'Testing...'} />)
    expect(container.firstChild).toHaveAttribute('type', 'submit')
  })
})
