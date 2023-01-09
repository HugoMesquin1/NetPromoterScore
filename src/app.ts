import 'reflect-metadata'
import { router } from './routes'
import createConnection from "../src/database"
import express, { NextFunction } from 'express'
import "express-async-errors" 
import { Request,Response } from 'express'

createConnection()

import './database'
import { AppError } from './errors/AppError'

const app = express()
app.use(express.json())

app.use((err: Error, request:Request, response:Response, _next : NextFunction)=> {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "Error",
        message: `Internal servel error ${err.message}`
    })
})

app.use(router)


export { app }