import React from 'react'
import LoginForm from '../../components/forms/login-form'
import { register } from '../../services/register'
import { RegisterParams, RegisterResponse } from '../../types/register'
import { setAuthToken } from '../../services/local-storage'
import { useRouter } from 'next/router'
import Card from '../../components/card'
import styles from '../../styles/Login.module.css'

const Index = () => {
  const router = useRouter()
  const submit = async (form: RegisterParams) => {
    try {
      const data: RegisterResponse = await register(form)
      setAuthToken(data.sl_token)
      router.push('/').catch((err) => console.error(err))
    } catch (err: any) {
      alert(err.response.data.error)
      console.log('Error login', err.response.data)
    }
  }

  return (
    <div className={styles.login}>
      <Card className={styles.loginCard}>
        <LoginForm onSubmit={submit} />
      </Card>
    </div>
  )
}

export default Index
