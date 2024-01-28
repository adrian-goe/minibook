import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book, BOOK_SCHEMA, BookCreateInput } from './gql-type/book.type';
import { BookService } from '../service/book.service';
import { z } from 'zod';
import { UserInputError } from '@nestjs/apollo';
import { Logger } from '@nestjs/common';

@Resolver('Book')
export class BookResolver {
  private readonly logger = new Logger(BookResolver.name);

  constructor(private readonly bookService: BookService) {}

  @Query(() => [Book])
  async getBooks(
    @Args('offset', { type: () => Int }) offset: number,
    @Args('limit', { type: () => Int }) limit: number
  ): Promise<Array<Book>> {
    return await this.bookService.getAllBooks(limit, offset);
  }

  @Mutation(() => Book)
  async createBook(
    @Args('createBook') bookData: BookCreateInput
  ): Promise<Book> {
    try {
      BOOK_SCHEMA.parse(bookData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.errors.map((err) => err.message).join(', ');
        this.logger.error(`Validation Error: ${errors}`, error);
        throw new UserInputError(`Validation Error: ${errors}`);
      }
    }
    return this.bookService.createBook(bookData);
  }
}
