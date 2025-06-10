import {User} from '../../../entities/user'
import { UserInput } from '../../../config/schemas/userSchema'

export interface IUsersRepository{
    findAll():Promise<User[]>
    create(data:UserInput):Promise<User>
}