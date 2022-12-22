import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import LoginForm from '../components/forms/login-form'

describe('Test login form', () => {
  it('renders', () => {
    const submit = jest.fn()
    render(<LoginForm onSubmit={submit} />)
  })

  it('Test name change', () => {
    const testID = 'login-form-name'
    const { getByTestId } = render(<LoginForm onSubmit={jest.fn()} />)

    const input = getByTestId(testID)

    const name = 'Aleix'
    fireEvent.change(input, { target: { value: name } })

    expect(input.getAttribute('value')).toBe(name)
  })

  it('Test email change', () => {
    const testID = 'login-form-email'
    const { getByTestId } = render(<LoginForm onSubmit={jest.fn()} />)

    const input = getByTestId(testID)

    const email = 'aleixmp1379@gmail.com'
    fireEvent.change(input, { target: { value: email } })

    expect(input.getAttribute('value')).toBe(email)
  })

  it('Test submit', () => {
    const submit = jest.fn()
    const { getByTestId } = render(<LoginForm onSubmit={submit} />)

    const button = getByTestId('login-submit')
    fireEvent.click(button)

    expect(submit).toHaveBeenCalled()
  })
})
