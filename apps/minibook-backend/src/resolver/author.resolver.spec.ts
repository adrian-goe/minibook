import { INestApplication } from '@nestjs/common';
import { gqlTestQuery, setupTestApp } from '../test-utils/setup';

describe('Author Resolver', function () {
  let app: INestApplication;
  // let db;

  beforeAll(async () => {
    app = await setupTestApp();
    // db = getDbClient();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return an author', async () => {
    const response = await gqlTestQuery(
      app,
      `
query AuthorQuery {
  author {
    id
    name
    books {
      isbn
      name
    }
  }
}
`
    );

    expect(response.status).toEqual(200);
    expect(response.body.data).toMatchSnapshot();
  });
});
