import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

// routes
app.get('/', (req, res) => {
  const status = JSON.stringify(res.statusCode, null, 2)
  res.send({ message: `Index route {GET} hello, status: ${status}` })
})

app.post('/', (req, res) => {
  const status = JSON.stringify(res.statusCode, null, 2)
  const body = JSON.stringify(req.body, null, 2)

  res.send({
    message: `Index route {POST} ok, status: ${status}, body: ${body}`
  })
})

export const start = () => {
  app.listen(3000, () => {
    console.log('Server started on port 3000')
  })
}
