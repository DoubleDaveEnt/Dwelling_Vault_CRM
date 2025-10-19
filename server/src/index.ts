import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())

const ORIGIN = process.env.CORS_ORIGIN || '*'
app.use(cors({ origin: ORIGIN }))

app.get('/health', (_req, res) => {
  res.json({ ok: true, ts: new Date().toISOString(), service: 'dvcrm-api' })
})

const PORT = process.env.PORT || 8086
app.listen(PORT, () => {
  console.log(`DVCRM API listening on http://localhost:${PORT}`)
})
