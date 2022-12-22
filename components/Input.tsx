import React from 'react'
import styles from '../styles/Input.module.css'
import { InputType } from '../types/form'

interface Props {
  id?: string
  testID?: string
  label?: string
  value: string
  className?: string
  onChange?: (text: string) => void
  type?: InputType
}

const Input = ({
  id,
  testID,
  label,
  value,
  className,
  onChange,
  type = 'text',
}: Props) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        data-testid={testID}
        value={value}
        type={type}
        className={`${styles.input} ${className}`}
        onChange={(event) => onChange && onChange(event.target.value)}
      />
    </>
  )
}

export default Input
