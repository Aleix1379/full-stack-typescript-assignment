import React from 'react'
import { MetricElement } from '../types/metrics'
import styles from '../styles/dashboard-item.module.css'
import { getMonthName } from '../utils/date'

interface Props {
  testID?: string
  data: MetricElement
  className?: string
}

const DashboardItem = ({
  testID = '',
  className = '',
  data: { median, totalPosts, totalByMonth, longestPost, userName },
}: Props) => {
  return (
    <div data-testid={testID} className={`${styles.item} ${className}`}>
      <div className={styles.row}>
        <div className={styles.label}>User</div>
        <div data-testid="dashboard-item-user-name" className={styles.value}>
          {userName}
        </div>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Total posts</span>
        <span data-testid="dashboard-item-total-posts">{totalPosts}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Median</span>
        <span data-testid="dashboard-item-median">{median}</span>
      </div>
      <div>
        <span className={styles.label}>Total by month</span>
        <div data-testid="dashboard-item-total-by-month">
          {Object.keys(totalByMonth).map((key) => {
            const month = Number(key)
            return (
              <ul key={key} className={styles.months}>
                <li>
                  {getMonthName(month - 1)}: {totalByMonth[month]}
                </li>
              </ul>
            )
          })}
        </div>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Longest post</span>
        <span data-testid="dashboard-item-longest-post">{longestPost}</span>
      </div>
    </div>
  )
}

export default DashboardItem
