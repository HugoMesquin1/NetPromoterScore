import 'reflect-metadata'
import { router } from './routes'
import createConnection from "../src/database"
import express from 'express'

createConnection()

import './database'

const app = express()
app.use(express.json())

app.use(router)


export { app }