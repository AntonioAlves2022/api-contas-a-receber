import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from '../entities/user'
import {Account} from '../entities/account'

export const AppDataSource = new DataSource({
    type:'sqlite',
    database:'./src/db/app.db',
    entities: [User, Account],
    migrations: ['./src/database/migrations/*.ts'],
})
