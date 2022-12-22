import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import cors from 'cors'
import axios from 'axios'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(cors())
  .post(async (req, res) => {
    try {
      const { URL_REGISTER, CLIENT_ID } = process.env
      const { email, name } = req.body

      if (!URL_REGISTER) {
        return res.status(500).json({ error: 'URL_REGISTER not defined' })
      }

      if (!CLIENT_ID) {
        return res.status(500).json({ error: 'CLIENT_ID not defined' })
      }

      if (!email) {
        return res.status(400).json({ error: 'email is required' })
      }

      if (!name) {
        return res.status(400).json({ error: 'name is required' })
      }

      const { data } = await axios.post(URL_REGISTER, {
        client_id: CLIENT_ID,
        email,
        name,
      })

      res.json(data.data)
    } catch (error) {
      res.status(500).json({ error: (error as Error).message })
    }
  })

export default handler
