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

// middlewares
const log = (req, res, next) => {
  console.log('logger', req.body, res.statusCode)

  // pass back any data to the 'next' controller
  req.mydata = 'mydata from logger'

  next()
}
// routes
app.get('/', log, (req, res) => {
  const status = JSON.stringify(res.statusCode, null, 2)
  res.send({ message: `Index route, status: ${status}` })
})

app.get('/data', log, (req, res) => {
  const status = JSON.stringify(res.statusCode, null, 2)
  const dataFromLogger = req.mydata

  res.send({
    message: `Data route, status: ${status}, dataFromLogger ${dataFromLogger}`
  })
})

app.post('/data', (req, res) => {
  //   const status = JSON.stringify(res.statusCode, null, 2)
  //   const body = JSON.stringify(req.body, null, 2)

  res.send(req.body)
})

export const start = () => {
  app.listen(3000, () => {
    console.log('Server started on port 3000')
  })
}
