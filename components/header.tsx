import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'

const Header = () => {
  const [currentPage, setCurrentPage] = React.useState('')
  const [links] = React.useState([
    { name: 'Posts', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
  ])

  React.useEffect(() => {
    setCurrentPage(window.location.pathname)
  }, [])

  const router = useRouter()
  React.useEffect(() => {
    router.events.on('routeChangeComplete', (url) => {
      setCurrentPage(url)
    })
  }, [router.events])

  return (
    <div className={styles.header}>
      <span className={styles.title}>Full Stack Typescript assignment</span>

      <ul className={styles.links}>
        {links.map((link) => (
          <li
            key={link.name}
            className={currentPage === link.href ? styles.active : ''}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Header
