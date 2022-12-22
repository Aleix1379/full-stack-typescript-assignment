import React from 'react'
import styles from '../styles/Card.module.css'

interface Props {
  testID?: string
  children: React.ReactNode
  className?: string
}

const Card = ({ testID = '', className, children }: Props) => {
  return (
    <div data-testid={testID} className={`${styles.card} ${className}`}>
      {children}
    </div>
  )
}

export default Card
