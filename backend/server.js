import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleWare.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
dotenv.config()

connectDB()

const app = express()
app.get('/', (req, res) => {
  res.send('API is running  ...')
})

app.use('/api/products', productRoutes)
const PORT = process.env.PORT || 5000

app.use(notFound)

app.use(errorHandler)

app.listen(
  PORT,
  console.log(
    `server running on port ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
)
