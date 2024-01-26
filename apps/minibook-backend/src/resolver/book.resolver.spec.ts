import { INestApplication } from '@nestjs/common';
import { gqlTestQuery, setupTestApp } from '../test-utils/setup';

describe('Book Resolver', function () {
  let app: INestApplication;

  beforeAll(async () => {
    app = await setupTestApp();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return a book', async () => {
    const response = await gqlTestQuery(
      app,
      `
query BookQuery {
  book {
    id
    isbn
    name
    author {
      name
    }
  }
}
`
    );

    expect(response.status).toEqual(200);
    expect(response.body.data).toMatchSnapshot();
  });

  it('should create a book', async () => {
    const response = await gqlTestQuery(
      app,
      `
mutation Mutation($createBook: BookCreateInput!) {
  createBook(createBook: $createBook) {
    author {
      name
    }
    isbn
    name
    id
  }
}
`,

      {
        createBook: {
          name: 'Momo',
          isbn: '978-3522202107',
        },
      }
    );

    expect(response.status).toEqual(200);
    expect(response.body.data).toMatchSnapshot();
  });
});
