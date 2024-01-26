import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book, BookCreateInput } from './gql-type/book.type';

@Resolver(() => Book)
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

  @Mutation(() => Book)
  async createBook(
    @Args('createBook') bookData: BookCreateInput
  ): Promise<Book> {
    return { id: '9d2cec44-03e5-4ad8-a28e-f9d64d180b75', ...bookData };
  }
}
