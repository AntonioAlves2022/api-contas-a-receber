import 'reflect-metadata'
import fastify from 'fastify'
import { AppDataSource } from './database/data-source'
import { env } from './config/env'
import { userRoutes } from './routes/user-routes'
import { errorHandler } from './errors/errorHandler'

const app = fastify()
app.register(userRoutes)
app.setErrorHandler(errorHandler)
AppDataSource.initialize()

app.listen({port:env.PORT}).then(
    ()=>{
        console.log('Server is running')
    }
)