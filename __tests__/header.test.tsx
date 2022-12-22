import React from 'react'
import { render } from '@testing-library/react'
import Header from '../components/header'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      events: {
        on: jest.fn(),
      },
    }
  },
}))

describe('Test Header component', () => {
  it('renders', () => {
    render(<Header />)
  })

  it('test links', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Posts')).toHaveAttribute('href', '/')
    expect(getByText('Dashboard')).toHaveAttribute('href', '/dashboard')
  })
})
