import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from '../database/entity/author.entity';
import { Repository } from 'typeorm';
import { BookEntity } from '../database/entity/book.entity';

@Injectable()
export class BookService {
  private readonly logger = new Logger(BookService.name);

  constructor(
    @InjectRepository(BookEntity)
    private bookEntityRepository: Repository<BookEntity>
  ) {}

  getAllBooks() {
    return this.bookEntityRepository.find({ relations: ['author'] });
  }
}
