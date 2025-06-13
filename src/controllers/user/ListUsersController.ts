import {FastifyRequest,FastifyReply} from 'fastify'
import { ListUsersUsecase } from '../../usecases/user/ListUsersUsecase'
import { UsersRepositoryImpl } from '../../database/repositories/users/UsersRepository'
const listUsersUsecase = new ListUsersUsecase(new UsersRepositoryImpl())
export class ListUsersController{
    async handle(req:FastifyRequest, reply:FastifyReply){
        try{
            const users = await listUsersUsecase.execute()
            return reply.status(200).send(users)
        }catch(error:any){
            return reply.status(500)
            .send({error:error.message})
        }
    }
}