import { Query, Resolver } from '@nestjs/graphql';
import { Author } from './gql-type/author.type';

@Resolver(() => Author)
export class AuthorResolver {
  constructor() {}

  @Query(() => Author)
  async author(): Promise<Author> {
    return {
      id: 'ffed4244-9d34-4b64-9fc6-68ef6b7cc98a',
      name: 'Adrian Görisch',
      books: [],
    };
  }

  @Query(() => [Author])
  async getAuthors(): Promise<Array<Author>> {
    return [
      {
        id: 'ffed4244-9d34-4b64-9fc6-68ef6b7cc98a',
        name: 'Adrian Görisch',
        books: [],
      },
    ];
  }
}
