import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { getPosts } from '../services/posts'
import { PostData } from '../types/posts'
import { useRouter } from 'next/router'
import { getAuthToken, removeAuthToken } from '../services/local-storage'
import Card from '../components/card'
import Post from '../components/post'
import Pagination from '../components/pagination'
import Loading from '../components/loading'

const TOTAL_PAGES = 10

export default function Home() {
  const router = useRouter()
  const [posts, setPosts] = useState<Array<PostData>>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const token = getAuthToken()
    if (!token) {
      router.push('/login').catch((err) => console.error(err))
      return
    }
    setLoading(true)
    getPosts({ sl_token: token, page: currentPage })
      .then((data) => {
        setPosts(data.posts)
      })
      .catch((err) => {
        console.error('Error get posts:', err.response.data)
        if (err.response.status === 401) {
          removeAuthToken()
          router.push('/login').catch((err) => console.error(err))
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [currentPage])

  return (
    <>
      <Head>
        <title>
          Posts {currentPage} / {TOTAL_PAGES}
        </title>
        <meta name="description" content="Full stack typescript assignment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Loading visible={loading} />

        <Pagination
          currentPage={currentPage}
          totalPages={TOTAL_PAGES}
          onPageChange={(page) => setCurrentPage(page)}
          className={styles.pagination}
        />

        {posts.map((post) => (
          <Card key={post.id}>
            <Post data={post} />
          </Card>
        ))}

        <Pagination
          currentPage={currentPage}
          totalPages={TOTAL_PAGES}
          onPageChange={(page) => setCurrentPage(page)}
          className={styles.pagination}
        />
      </main>
    </>
  )
}
