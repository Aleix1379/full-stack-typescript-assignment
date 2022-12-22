import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import cors from 'cors'
import axios from 'axios'
import { PostData } from '../../types/posts'
import { parsePostsToMetrics } from '../../services/metrics'
import { AxiosError } from 'axios'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(cors())
  .get(async (req, res) => {
    try {
      const { URL_POSTS } = process.env
      const { sl_token, page = 1, totalPages = 10 } = req.query

      if (!sl_token) {
        return res.status(400).json({ error: 'sl_token is required' })
      }

      if (!URL_POSTS) {
        return res.status(500).json({ error: 'URL_POSTS not defined' })
      }

      if (isNaN(Number(page))) {
        return res.status(400).json({ error: 'page must be a number' })
      }

      const promises = []
      for (let i = 1; i <= totalPages; i++) {
        promises.push(
          axios.get(URL_POSTS, {
            params: {
              sl_token,
              page: i,
            },
          })
        )
      }

      const results = await Promise.all(promises)

      const posts: Array<PostData> = results.reduce(
        (acc: Array<PostData>, result) => [...acc, ...result.data.data.posts],
        []
      )

      const result = parsePostsToMetrics(posts)

      res.json(result)
    } catch (error) {
      const err = error as AxiosError
      let status = 500
      if (err.response) {
        status = err.response.status
      }
      res.status(status).json({ error: err.message })
    }
  })

export default handler
