import React from 'react'
import styles from '../styles/Loading.module.css'
import Image from 'next/image'

interface Props {
  testID?: string
  visible: boolean
  className?: string
}

const Loading = ({ testID = '', visible, className = '' }: Props) => {
  if (!visible) {
    return null
  }

  return (
    <div data-testid={testID} className={`${styles.loading} ${className}`}>
      <Image src="/images/loading.svg" width={200} height={200} alt="Loading" />
      <span className={styles.message}>Loading posts</span>
    </div>
  )
}

export default Loading
