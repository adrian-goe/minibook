import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookEntity } from '../database/entity/book.entity';
import { BookCreateInput } from '../resolver/gql-type/book.type';
import { AuthorService } from './author.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private bookEntityRepository: Repository<BookEntity>,
    private readonly authorService: AuthorService
  ) {}

  async getAllBooks(limit: number, offset: number) {
    return await this.bookEntityRepository
      .createQueryBuilder('book')
      .skip(offset)
      .take(limit)
      .orderBy({
        'book.name': 'ASC',
        'book.isbn': 'ASC',
      })
      .leftJoinAndSelect('book.author', 'author')
      .getMany();
  }

  async createBook(bookData: BookCreateInput) {
    const author = await this.authorService.getById(bookData.authorId);
    if (!author) {
      throw new Error('Author not found');
    }
    const book = new BookEntity();
    book.id = uuidv4();
    book.name = bookData.name;
    book.isbn = bookData.isbn;
    book.author = author;
    return this.bookEntityRepository.save(book);
  }
}
