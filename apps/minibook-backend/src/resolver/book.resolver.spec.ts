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

  it('should return with books', async () => {
    const response = await gqlTestQuery(
      app,
      `
query BookQuery {
  getBooks {
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
          authorId: 'e0b48fde-7bbb-469e-848b-3aea659220b0',
        },
      }
    );

    expect(response.status).toEqual(200);
    expect(response.body.data).toMatchSnapshot();
  });

  it('should return author id validation error', async () => {
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
          authorId: 'e0b48fde-7bbb-469e-848b',
        },
      }
    );

    expect(response.status).toEqual(200);
    expect(response.body.data).toBeNull();
    expect(response.body.errors).toHaveLength(1);
    expect(response.body.errors[0].message).toEqual(
      'Validation Error: Invalid uuid'
    );
  });
});
