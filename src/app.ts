import express from 'express'
import cors from 'cors'

import userRoutes from './routes/userRoutes'
import { errorHandlerMiddleware } from './middleware/errorHandlerMiddleware'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/', userRoutes)

app.use(errorHandlerMiddleware)

export default app