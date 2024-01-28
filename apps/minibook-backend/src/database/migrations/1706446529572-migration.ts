import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1706446529572 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS author
      (
        id   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS book
      (
        id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name      TEXT NOT NULL,
        isbn      INT,
        author_id UUID NOT NULL REFERENCES author (id) ON DELETE CASCADE
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
