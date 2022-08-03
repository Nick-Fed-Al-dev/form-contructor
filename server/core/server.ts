import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import router from './router'
import responseMiddleware from '../middleware/response.middleware'

const server = express()
dotenv.config()

const corsConfig = {
  origin: true,
  credentials: true
}
server.use(cors(corsConfig))
server.use(cookieParser())
server.use(express.json())

server.use('/api', router)
server.use(responseMiddleware)

const PORT : number = Number(process.env.PORT as string) || 3333

const start = async () : Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string)
    console.log('Data base connected')
    server.listen(PORT, () => {
      console.log(`Server was started on port ${PORT}...`)
    })
  } catch (error : any) {
    console.log(error)
    process.exit(1)
  }
}

export default start
