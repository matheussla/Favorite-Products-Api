import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateOptions1612841961814 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'options',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'question_id',
            type: 'uuid'
          },
          {
            name: 'key',
            type: 'varchar'
          },
          {
            name: 'value',
            type: 'varchar'
          },
          {
            name: 'correct',
            type: 'boolean'
          }
        ]
      })
    )

    await queryRunner.createForeignKey(
      'options',
      new TableForeignKey({
        name: 'OptionsInQuestion',
        columnNames: ['question_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'questions',
        onDelete: 'SET NULL'
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('options', 'OptionsInQuestion')

    await queryRunner.dropTable('options')
  }
}
