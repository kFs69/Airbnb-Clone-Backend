import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddTypeRoomInPlace1600973234975 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'places',
            new TableColumn({
                name: 'room_type',
                type: 'smallint',
                default: 0
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('places', 'room_type');
    }

}
