import { Repository } from 'typeorm'
import { User } from '../../../entities/user'
import { AppDataSource } from '../../data-source'
import { UserInput } from '../../../config/schemas/userSchema'
import { IUsersRepository } from './IUsersRepository'

export class UsersRepositoryImpl implements IUsersRepository{
    
    private repository:Repository<User>
    constructor(){
        this.repository = AppDataSource.getRepository(User)
    }
    async findAll(): Promise<User[]> {
        return this.repository.find()

    }
    create(data: UserInput): Promise<User> {
        const conta = this.repository.create(data)
        return this.repository.save(conta)
    }
    
    
}