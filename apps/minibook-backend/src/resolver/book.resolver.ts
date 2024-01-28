import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book, BookCreateInput } from './gql-type/book.type';

@Resolver('Book')
export class BookResolver {
  constructor() {}

  @Query(() => Book)
  async book(): Promise<Book> {
    return {
      id: 'ffed4244-9d34-4b64-9fc6-68ef6b7cc98a',
      name: 'Ein buch',
      isbn: '978-3522202107',
    };
  }

  @Query(() => [Book])
  async getBooks(): Promise<Array<Book>> {
    return [
      {
        id: 'ffed4244-9d34-4b64-9fc6-68ef6b7cc98a',
        name: 'Ein buch 0',
        isbn: '9783522202107',
      },
      {
        id: '05a704d9-475b-44ee-95a1-c977fb5a6ca6',
        name: 'Ein buch 1',
        isbn: '9783522202107',
      },
      {
        id: '06c575d7-5c72-4801-9527-c551934c5a09',
        name: 'Ein buch 2',
        isbn: '9783522202107',
      },
    ];
  }

  @Mutation(() => Book)
  async createBook(
    @Args('createBook') bookData: BookCreateInput
  ): Promise<Book> {
    return { id: '9d2cec44-03e5-4ad8-a28e-f9d64d180b75', ...bookData };
  }
}
