import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddFieldsPlace1600966220732 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'places',
            new TableColumn({
                name: 'country',
                type: 'varchar'
            }),
        );
        await queryRunner.addColumn(
            'places',
            new TableColumn({
                name: 'state',
                type: 'varchar',
                isNullable: true
            }),
        );
        await queryRunner.addColumn(
            'places',
            new TableColumn({
                name: 'city',
                type: 'varchar'
            }),
        );
        await queryRunner.addColumn(
            'places',
            new TableColumn({
                name: 'territory',
                type: 'varchar',
                isNullable: true
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('places', 'country');
        await queryRunner.dropColumn('places', 'state');
        await queryRunner.dropColumn('places', 'territory');
        await queryRunner.dropColumn('places', 'city');
    }

}
