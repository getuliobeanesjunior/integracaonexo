import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Logs1660742078524 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        queryRunner.createTable(new Table({
            name: "integration_logs",
            columns:[
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy:"uuid",
                    default:"uuid_generate_v4()",
                },
            {
                name:"integration_type",
                type:"varchar"
            },
            {
                name:"integration_success",
                type:"boolean"
            },
            {
                name:"sent_json",
                type:"varchar"
            },
            {
                name:"message",
                type:"varchar"
            },
            {
                name: "created_at",
                type: "timestamp",
                default: "datetime('now')",
            }]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('integration_logs')
    }

}
