import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Author, AuthorInput } from './gql-type/author.type';

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

  @Mutation(() => Author)
  async createAuthor(@Args('createAuthor') authorData: AuthorInput) {
    return { id: 'b2afb1d6-cc91-4be9-a0d3-8f500666c52d', ...authorData };
  }
}
