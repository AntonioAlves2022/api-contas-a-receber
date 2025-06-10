import { FastifyReply, FastifyRequest } from 'fastify'
import { userSchema } from '../../config/schemas/userSchema'
import { UsersRepositoryImpl } from '../../database/repositories/users/UsersRepository'
import { CreateUserUseCase } from '../../usecases/user/CreateUserUseCase'

// Inversão de Injeção de Dependecias
const createUserUseCase = new CreateUserUseCase(new UsersRepositoryImpl())
export class CreateUserController{
    async handle(req:FastifyRequest, reply:FastifyReply){
        try{
            const body = userSchema.parse(req.body)
            const user = await createUserUseCase
            .execute(body)
            return reply.code(201).send(user)
        }catch(error: any){
            return reply.code(400)
            .send({error:error.errors|| error.message})
        }
    }
}