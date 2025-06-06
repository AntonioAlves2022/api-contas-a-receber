import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAccount1749169395943 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name:'accounts',
            columns:[
                {name:'id', type:'varchar', isPrimary:true},
                {name:'description', type:'varchar', isNullable:false},
                {name:'amount', type:'decimal', scale:8, precision:2},
                {name:'type', type:'varchar'}
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('accounts')
    }

}
