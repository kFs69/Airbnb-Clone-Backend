import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateReservation1600547391553 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
      await queryRunner.createTable(
        new Table({
          name: 'reservations',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()'
            },
            {
              name: 'checkin',
              type: 'timestamp with time zone'
            },
            {
              name: 'checkout',
              type: 'timestamp with time zone',
            },
            {
              name: 'adult',
              type: 'smallint',
              default: 0
            },
            {
              name: 'children',
              type: 'smallint',
              default: 0
            },
            {
              name: 'infants',
              type: 'smallint',
              default: 0
            },
            {
              name: 'amount',
              type: 'varchar',
              default: 0
            },
            {
              name: 'deleted_at',
              type: 'timestamp',
              default: 'now()'
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('reservations');
    }

}
