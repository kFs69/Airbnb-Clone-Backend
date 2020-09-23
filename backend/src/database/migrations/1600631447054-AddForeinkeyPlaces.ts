import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddForeinkeyPlaces1600631447054 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'places',
            new TableColumn({
                name: 'host_id',
                type: 'uuid',
                isNullable: true
            }),
        );

        await queryRunner.createForeignKey('places', new TableForeignKey({
            name: 'PlaceHostId',
            columnNames: ['host_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('places', 'PlaceHostId');
        await queryRunner.dropColumn('places', 'host_id');
    }

}
