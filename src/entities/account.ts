import 'reflect-metadata'
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
@Entity("accounts")
export class Account {
    @PrimaryGeneratedColumn()
    id: string
    @Column({type:'varchar'})
    description: string
    @Column({type:'decimal',scale:8, precision:2})
    amount: number
    @Column({type:'varchar'})
    type: string
}