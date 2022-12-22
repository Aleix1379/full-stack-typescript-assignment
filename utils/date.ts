export const displayDate = (date: string): string => {
  const dateObj = new Date(date)

  return `${dateObj.getDate()} ${getMonthName(
    dateObj.getMonth()
  )} ${dateObj.getFullYear()} - ${dateObj.getHours()}:${dateObj.getMinutes()}`
}

export const getMonthName = (month: number): string => {
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
  return monthNames[month]
}
