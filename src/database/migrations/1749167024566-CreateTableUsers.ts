import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUsers1749167024566 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'users',
            columns:[
                {name:'id', type:'varchar', isPrimary:true},
                {name:'name', type:'varchar'},
                {name:'email', type:'varchar', isUnique:true},
                {name:'password', type:'varchar', isNullable:false}

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('users')
    }

}
