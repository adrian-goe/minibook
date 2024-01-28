import { Query, Resolver } from '@nestjs/graphql';
import { Book } from './gql-type/book.type';
import { BookService } from '../service/book.service';

@Resolver('Book')
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => [Book])
  async getBooks(): Promise<Array<Book>> {
    return this.bookService.getAllBooks();
  }

  // @Mutation(() => Book)
  // async createBook(
  //   @Args('createBook') bookData: BookCreateInput
  // ): Promise<Book> {
  //   return { id: '9d2cec44-03e5-4ad8-a28e-f9d64d180b75', ...bookData };
  // }
}
