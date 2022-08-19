import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class alterTableLogs1660931789058 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('integration_logs',
        new TableColumn({
            name: "message",
            type: "varchar",
        }))

        await queryRunner.dropColumn('integration_logs','integration_id')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('integration_logs',
        new TableColumn({
            name: "message",
            type: "varchar",
        }))

        await queryRunner.addColumn('integration_logs',new TableColumn({
            name: "integration_id",
            type: "varchar",
        }))
    }

}
