'use client'

import React, { useState } from 'react'
import styles from '../../styles/LoginForm.module.css'
import Button from '../button'
import Input from '../Input'
import { RegisterParams } from '../../types/register'

interface Props {
  testID?: string
  onSubmit: (form: RegisterParams) => void
}

const LoginForm = ({ testID = '', onSubmit }: Props) => {
  const [form, setForm] = useState<RegisterParams>({
    name: '',
    email: '',
  })

  return (
    <div data-testid={testID} className={styles.container}>
      <h1>Login</h1>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit(form)
        }}
      >
        <Input
          id="name"
          testID={'login-form-name'}
          label={'Name'}
          value={form.name}
          onChange={(value) => setForm({ ...form, name: value })}
          type="text"
        />

        <Input
          id={'email'}
          testID={'login-form-email'}
          label={'Email'}
          value={form.email}
          onChange={(value) => setForm({ ...form, email: value })}
          type={'email'}
        />

        <Button testId={'login-submit'} type="submit" className={styles.submit}>
          Login
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
