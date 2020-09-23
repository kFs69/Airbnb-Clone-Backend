import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddForeinkeysReservation1600628417791 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'reservations',
            new TableColumn({
                name: 'user_id',
                type: 'uuid',
                isNullable: true
            }),
        );
        await queryRunner.addColumn(
            'reservations',
            new TableColumn({
                name: 'place_id',
                type: 'uuid',
                isNullable: true
            }),
        );

        await queryRunner.createForeignKey('reservations', new TableForeignKey({
            name: 'ReservationUserId',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }))
        await queryRunner.createForeignKey('reservations', new TableForeignKey({
            name: 'ReservationPlaceId',
            columnNames: ['place_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'places',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('reservations', 'ReservationUserId');
        await queryRunner.dropForeignKey('reservations', 'ReservationPlaceId');
        await queryRunner.dropColumn('reservations', 'user_id');
        await queryRunner.dropColumn('reservations', 'place_id');
    }

}
