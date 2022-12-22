import '../styles/globals.css'
import '../styles/colors.css'
import '../styles/fonts.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import styles from '../styles/App.module.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.app}>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
