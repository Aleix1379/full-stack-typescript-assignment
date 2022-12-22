import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import cors from 'cors'
import axios, { AxiosError } from 'axios'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(cors())
  .get(async (req, res) => {
    try {
      const { URL_POSTS } = process.env
      const { sl_token, page = 1 } = req.query

      if (!URL_POSTS) {
        return res.status(500).json({ error: 'URL_POSTS not defined' })
      }

      if (!sl_token) {
        return res.status(400).json({ error: 'sl_token is required' })
      }

      if (isNaN(Number(page))) {
        return res.status(400).json({ error: 'page must be a number' })
      }

      const { data } = await axios.get(URL_POSTS, {
        params: {
          sl_token,
          page,
        },
      })

      res.json(data.data)
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
