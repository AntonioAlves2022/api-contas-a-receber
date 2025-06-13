import {v4 as uuidv4} from 'uuid'
import {hash} from 'bcryptjs'
import { UserInput } from '../../config/schemas/userSchema'
import { IUsersRepository } from '../../database/repositories/users/IUsersRepository'

export class CreateUserUseCase{
    constructor(private usersRepository:IUsersRepository){}
    
    async execute(data:UserInput){
        const passwordHash = await hash(data.password,10)
        const user = {
            id: uuidv4(),
            name: data.name,
            email: data.email,
            password: passwordHash
            
        }

        return this.usersRepository.create(user)
    }
}