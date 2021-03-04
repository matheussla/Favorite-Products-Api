import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateQuestions1612841937202 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'questions',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'exam_id',
            type: 'uuid'
          },
          {
            name: 'statement',
            type: 'varchar'
          }
        ]
      })
    )

    await queryRunner.createForeignKey(
      'questions',
      new TableForeignKey({
        name: 'QuestionsInExam',
        columnNames: ['exam_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'exams',
        onDelete: 'SET NULL'
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('questions', 'QuestionsInExam')

    await queryRunner.dropTable('questions')
  }
}
