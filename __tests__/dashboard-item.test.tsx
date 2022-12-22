import React from 'react'
import { render } from '@testing-library/react'
import DashboardItem from '../components/dashboard-item'

const item = {
  userId: 'user_15',
  userName: 'Yolande Urrutia',
  totalPosts: 52,
  totalByMonth: { '7': 11, '8': 12, '9': 5, '10': 11, '11': 5, '12': 8 },
  longestPost: 731,
  median: 348.5,
}

describe('Test DashboardItem component', () => {
  it('renders with a custom class name', () => {
    const { container } = render(
      <DashboardItem className="my-custom-class" data={item} />
    )
    expect(container.firstChild).toHaveClass('my-custom-class')
  })

  it('renders with a custom children value', () => {
    const { getByTestId } = render(<DashboardItem data={item} />)
    expect(getByTestId('dashboard-item-user-name')).toHaveTextContent(
      'Yolande Urrutia'
    )
  })

  it('renders with the correct number of posts', () => {
    const { getByTestId } = render(<DashboardItem data={item} />)
    expect(getByTestId('dashboard-item-total-posts')).toHaveTextContent('52')
  })

  it('renders with the correct longest post', () => {
    const { getByTestId } = render(<DashboardItem data={item} />)
    expect(getByTestId('dashboard-item-longest-post')).toHaveTextContent('731')
  })

  it('renders with the correct median', () => {
    const { getByTestId } = render(<DashboardItem data={item} />)
    expect(getByTestId('dashboard-item-median')).toHaveTextContent('348.5')
  })

  it('renders with the correct number of posts by month', () => {
    const { getByTestId } = render(<DashboardItem data={item} />)
    expect(getByTestId('dashboard-item-total-by-month')).toHaveTextContent(
      'December: 8'
    )
  })
})
