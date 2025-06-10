import {v4 as uuidv4} from 'uuid'
import { UserInput } from '../../config/schemas/userSchema'
import { IUsersRepository } from '../../database/repositories/users/IUsersRepository'

export class CreateUserUseCase{
    constructor(private usersRepository:IUsersRepository){}
    
    async execute(data:UserInput){
        const user = {
            id: uuidv4(),
            ...data
        }

        return this.usersRepository.create(user)
    }
}