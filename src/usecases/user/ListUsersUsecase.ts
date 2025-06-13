import { IUsersRepository } from "../../database/repositories/users/IUsersRepository";
import { User } from "../../entities/user";

export class ListUsersUsecase{
    constructor(private usersRepository:IUsersRepository){}

    async execute():Promise<User[]>{
        return await this.usersRepository.findAll()

    }
}