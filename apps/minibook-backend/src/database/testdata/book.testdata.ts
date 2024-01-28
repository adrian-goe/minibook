import { MigrationInterface, QueryRunner } from 'typeorm';

export class TestdataBook1706446934775 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO book (id, name, isbn, author_id) VALUES ('5291a7fc-d663-40d6-935a-38b52d697fe3', 'Book Title 1', '123456789', '7723ca95-0b0c-4ea0-abb2-f7ac6c12a9d8');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('e2961f44-9b67-4eb5-8924-0bc047647317', 'Book Title 2', '123456790', '82b24e5b-a7f7-4de8-91b4-26f7a4f0f8b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('f3e92efe-d784-4dce-bd4e-09e105239e75', 'Book Title 3', '123456791', 'e0b48fde-7bbb-469e-848b-3aea659220b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('ca3a92b0-d386-4c26-8715-726a884f6b59', 'Book Title 4', '123456792', '7723ca95-0b0c-4ea0-abb2-f7ac6c12a9d8');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('0067b91f-d513-4877-b1e5-c7d9217ba993', 'Book Title 5', '123456793', '82b24e5b-a7f7-4de8-91b4-26f7a4f0f8b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('d0c347bc-1545-4f38-bf82-e71a05b429c4', 'Book Title 6', '123456794', 'e0b48fde-7bbb-469e-848b-3aea659220b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('57443459-d95d-4911-b2df-7bcfc3f0c7f0', 'Book Title 7', '123456795', '7723ca95-0b0c-4ea0-abb2-f7ac6c12a9d8');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('5e0ddd47-abdf-4c75-9174-2dfdbbbfb29d', 'Book Title 8', '123456796', '82b24e5b-a7f7-4de8-91b4-26f7a4f0f8b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('340f0fcb-ca7f-4037-98b3-7f4bfea2eb08', 'Book Title 9', '123456797', 'e0b48fde-7bbb-469e-848b-3aea659220b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('ce9a57b4-3e9d-41b3-b306-3d2140b2874a', 'Book Title 10', '123456798', '7723ca95-0b0c-4ea0-abb2-f7ac6c12a9d8');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('3e58038e-fcd3-4125-b036-392762547d4e', 'Book Title 11', '123456799', '82b24e5b-a7f7-4de8-91b4-26f7a4f0f8b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('dc24b466-9083-4159-b094-5d3eb25bfad7', 'Book Title 12', '123456800', 'e0b48fde-7bbb-469e-848b-3aea659220b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('2dbbe6d9-95cb-427d-b28a-ab5f4f6c8f50', 'Book Title 13', '123456801', '7723ca95-0b0c-4ea0-abb2-f7ac6c12a9d8');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('b7e46666-2385-41a3-8899-7740cc3ab7b1', 'Book Title 14', '123456802', '82b24e5b-a7f7-4de8-91b4-26f7a4f0f8b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('32e156fb-9e26-4b03-83a3-9697ad1f3897', 'Book Title 15', '123456803', 'e0b48fde-7bbb-469e-848b-3aea659220b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('dd00daa7-1afc-416f-a4f3-5dbf22852e43', 'Book Title 16', '123456804', '7723ca95-0b0c-4ea0-abb2-f7ac6c12a9d8');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('85d8380d-e7ae-483a-9850-d51ad1882d9e', 'Book Title 17', '123456805', '82b24e5b-a7f7-4de8-91b4-26f7a4f0f8b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('7f040fa8-f690-4138-ac46-ab1e244f87bd', 'Book Title 18', '123456806', 'e0b48fde-7bbb-469e-848b-3aea659220b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('9ec83d45-532f-4f10-8b87-eac8192805e8', 'Book Title 19', '123456807', '7723ca95-0b0c-4ea0-abb2-f7ac6c12a9d8');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('f5116dff-528c-41d2-917c-96ca2f32bf2f', 'Book Title 20', '123456808', '82b24e5b-a7f7-4de8-91b4-26f7a4f0f8b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('16fbcf5b-05c5-4c0c-ac1b-8563e8623313', 'Book Title 21', '123456809', 'e0b48fde-7bbb-469e-848b-3aea659220b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('14b7db0a-ec3b-460e-ab97-f94eb2ec6233', 'Book Title 22', '123456810', '7723ca95-0b0c-4ea0-abb2-f7ac6c12a9d8');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('a28c4b71-6f86-40a7-85ac-3d4c1454c07b', 'Book Title 23', '123456811', '82b24e5b-a7f7-4de8-91b4-26f7a4f0f8b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('0c163fef-88dd-4685-b1c8-9fcd589c78ed', 'Book Title 24', '123456812', 'e0b48fde-7bbb-469e-848b-3aea659220b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('ac908521-af52-4eba-9fc0-b8746b5f7522', 'Book Title 25', '123456813', '7723ca95-0b0c-4ea0-abb2-f7ac6c12a9d8');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('33c4d945-9758-4275-a938-5bb2027f58c6', 'Book Title 26', '123456814', '82b24e5b-a7f7-4de8-91b4-26f7a4f0f8b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('befb14c9-c91a-47d4-8a6e-220ee6debc5f', 'Book Title 27', '123456815', 'e0b48fde-7bbb-469e-848b-3aea659220b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('e3843410-2a7b-4591-83de-3fbe6dd1e641', 'Book Title 28', '123456816', '7723ca95-0b0c-4ea0-abb2-f7ac6c12a9d8');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('55ada36a-65d0-4d0c-9c26-e79b7368d4b0', 'Book Title 29', '123456817', '82b24e5b-a7f7-4de8-91b4-26f7a4f0f8b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('30d3094f-5092-41c9-b64c-cbfdf92df7d1', 'Book Title 30', '123456818', 'e0b48fde-7bbb-469e-848b-3aea659220b0');
        INSERT INTO book (id, name, isbn, author_id) VALUES ('513ee25e-608e-41dc-8274-12b6276b383b', 'Book Title 31', '123456819', 'e0b48fde-7bbb-469e-848b-3aea659220b0');
          `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
