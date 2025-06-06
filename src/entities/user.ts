import 'reflect-metadata'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
@Entity("users")
export class User{
    @PrimaryGeneratedColumn()
    id:string
    @Column({type:'varchar',length:50 })
    name:string
    @Column({type:'varchar',length:250, unique:true})
    email:string
    @Column({type:'varchar',length:32})
    password:string
}