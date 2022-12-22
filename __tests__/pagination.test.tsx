import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Pagination from '../components/pagination'

describe('Test Pagination component', () => {
  it('renders', () => {
    render(
      <Pagination currentPage={1} totalPages={10} onPageChange={jest.fn()} />
    )
  })

  it('goes to first page', () => {
    const onPageChange = jest.fn()
    const { getByText } = render(
      <Pagination currentPage={2} totalPages={10} onPageChange={onPageChange} />
    )
    fireEvent.click(getByText('First'))
    expect(onPageChange).toHaveBeenCalledWith(1)
  })

  it('goes to previous page', () => {
    const onPageChange = jest.fn()
    const { getByText } = render(
      <Pagination currentPage={2} totalPages={10} onPageChange={onPageChange} />
    )
    fireEvent.click(getByText('Previous'))
    expect(onPageChange).toHaveBeenCalledWith(1)
  })

  it('goes to next page', () => {
    const onPageChange = jest.fn()
    const { getByText } = render(
      <Pagination currentPage={1} totalPages={10} onPageChange={onPageChange} />
    )
    fireEvent.click(getByText('Next'))
    expect(onPageChange).toHaveBeenCalledWith(2)
  })

  it('goes to last page', () => {
    const onPageChange = jest.fn()
    const { getByText } = render(
      <Pagination currentPage={1} totalPages={10} onPageChange={onPageChange} />
    )
    fireEvent.click(getByText('Last'))
    expect(onPageChange).toHaveBeenCalledWith(10)
  })

  it('does not go to first page if already on first page', () => {
    const onPageChange = jest.fn()
    const { getByText } = render(
      <Pagination currentPage={1} totalPages={10} onPageChange={onPageChange} />
    )
    fireEvent.click(getByText('First'))
    expect(onPageChange).not.toHaveBeenCalled()
  })

  it('does not go to previous page if already on first page', () => {
    const onPageChange = jest.fn()
    const { getByText } = render(
      <Pagination currentPage={1} totalPages={10} onPageChange={onPageChange} />
    )
    fireEvent.click(getByText('Previous'))
    expect(onPageChange).not.toHaveBeenCalled()
  })

  it('does not go to next page if already on last page', () => {
    const onPageChange = jest.fn()
    const { getByText } = render(
      <Pagination
        currentPage={10}
        totalPages={10}
        onPageChange={onPageChange}
      />
    )
    fireEvent.click(getByText('Next'))
    expect(onPageChange).not.toHaveBeenCalled()
  })

  it('does not go to last page if already on last page', () => {
    const onPageChange = jest.fn()
    const { getByText } = render(
      <Pagination
        currentPage={10}
        totalPages={10}
        onPageChange={onPageChange}
      />
    )
    fireEvent.click(getByText('Last'))
    expect(onPageChange).not.toHaveBeenCalled()
  })
})
