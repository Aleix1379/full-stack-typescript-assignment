import React, { useEffect, useState } from 'react'
import styles from '../../styles/Dashboard.module.css'
import Head from 'next/head'
import { getAuthToken, removeAuthToken } from '../../services/local-storage'
import { useRouter } from 'next/router'
import { getMetrics } from '../../services/metrics'
import Loading from '../../components/loading'
import Card from '../../components/card'
import DashboardItem from '../../components/dashboard-item'
import { Metrics } from '../../types/metrics'

export default function Dashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [metrics, setMetrics] = useState<Metrics>({})

  useEffect(() => {
    const token = getAuthToken()
    if (!token) {
      router.push('/login').catch((err) => console.error(err))
      return
    }
    setLoading(true)
    getMetrics({ sl_token: token })
      .then((data) => {
        setMetrics(data)
      })
      .catch((err) => {
        console.error('Error get metrics:', err.response.data)
        if (err.response.status === 401) {
          removeAuthToken()
          router.push('/login').catch((err) => console.error(err))
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Full stack typescript assignment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Loading visible={loading} />

        {Object.keys(metrics).map((key) => (
          <Card key={key} className={styles.item}>
            <DashboardItem data={metrics[key]} />
          </Card>
        ))}
      </main>
    </>
  )
}
