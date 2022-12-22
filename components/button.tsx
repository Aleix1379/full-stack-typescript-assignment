import React from 'react'
import styles from '../styles/Button.module.css'

interface Props {
  testId?: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'submit' | 'button'
}

const Button = ({ testId, children, onClick, className, type }: Props) => {
  return (
    <button
      data-testid={testId}
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
