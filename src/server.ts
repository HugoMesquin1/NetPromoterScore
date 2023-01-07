import 'reflect-metadata'
import { router } from './routes'
import { request, response } from 'express'
import express from 'express'

import './database'

const app = express()
app.use(express.json())

app.use(router)


app.listen(3333, () => console.log("Server ok"))