import { displayDate, getMonthName } from '../utils/date'

describe('Date utils', () => {
  it('Test display date', () => {
    const date = '2022-12-22T07:10:00'
    const result = displayDate(date)
    expect(result).toBe('22 December 2022 - 7:10')
  })

  it('Test get month name', () => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    monthNames.forEach((monthName, index) => {
      const result = getMonthName(index)
      expect(result).toBe(monthName)
    })
  })
})
