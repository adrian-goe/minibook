import { MigrationInterface, QueryRunner } from 'typeorm';

export class TestdataAuthor1706446934775 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO author (id, name) VALUES ('7723ca95-0b0c-4ea0-abb2-f7ac6c12a9d8', 'John Smith');
        INSERT INTO author (id, name) VALUES ('82b24e5b-a7f7-4de8-91b4-26f7a4f0f8b0', 'Jane Doe');
        INSERT INTO author (id, name) VALUES ('e0b48fde-7bbb-469e-848b-3aea659220b0', 'William Brown');
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
