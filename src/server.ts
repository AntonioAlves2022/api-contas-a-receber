import 'reflect-metadata'
import fastify from 'fastify'
import { AppDataSource } from './database/data-source'
import { env } from './config/env'

const app = fastify()
AppDataSource.initialize()

app.listen({port:env.PORT}).then(
    ()=>{
        console.log('Server is running')
    }
)