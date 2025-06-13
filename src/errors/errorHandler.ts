import {FastifyError, FastifyReply, FastifyRequest} from 'fastify'
import {ZodError} from 'zod'
import { AppError } from './AppError'
export function errorHandler(error:FastifyError, req:FastifyRequest, reply:FastifyReply){
    if(error instanceof ZodError){
        return reply.status(400).send({
            error: 'Erro de validação',
            details:error.errors
        })
    }
    if(error instanceof AppError){
        return reply.status(error.statusCode).send({
            error:error.message
        })
    }
    console.error('Erro interno',error)
    return reply.status(500).send({
        error: 'Erro interno do servidor.'
    })
}