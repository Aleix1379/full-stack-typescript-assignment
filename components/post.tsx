import React from 'react'
import { PostData } from '../types/posts'
import styles from '../styles/Post.module.css'
import { displayDate } from '../utils/date'

interface Props {
  testID?: string
  data: PostData
}

const Post = ({
  testID = '',
  data: { id, from_name, from_id, message, type, created_time },
}: Props) => {
  return (
    <div data-testid={testID} className={styles.post}>
      <div className={styles.details}>
        <span>type: {type}</span>
        <span className={styles.author}> {from_name}</span>
        <span>{displayDate(created_time)}</span>
      </div>
      <p>{message}</p>
    </div>
  )
}

export default Post
