import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePlace1600798233502 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
          new Table({
            name: 'places',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()'
              },
              {
                name: 'title',
                type: 'varchar'
              },
              {
                name: 'description',
                type: 'text',
              },
              {
                name: 'guests',
                type: 'smallint',
                default: 1
              },
              {
                name: 'bedroom',
                type: 'smallint',
                default: 0
              },
              {
                name: 'double_bed',
                type: 'smallint',
                default: 0
              },
              {
                name: 'sofa_bed',
                type: 'smallint',
                default: 0
              },
              {
                name: 'single_bed',
                type: 'smallint',
                default: 0
              },
              {
                name: 'bath',
                type: 'smallint',
                default: 0
              },
              {
                name: 'price',
                type: 'int',
                default: 0
              },
              {
                name: 'aditional_rules',
                type: 'text',
                isNullable: true
              },
              {
                name: 'photos',
                type: 'text[]',
              },
              {
                name: 'created_at',
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
        await queryRunner.dropTable('places');
      }

}

