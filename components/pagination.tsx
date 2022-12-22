import React from 'react'
import styles from '../styles/Pagination.module.css'

interface Props {
  testID?: string
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

const Pagination = ({
  testID = '',
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}: Props) => {
  return (
    <div data-testid={testID} className={`${styles.pagination} ${className}`}>
      <button
        className={styles.button}
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        First
      </button>

      <button
        className={styles.button}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <button
        className={styles.button}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>

      <button
        className={styles.button}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        Last
      </button>
    </div>
  )
}

export default Pagination
