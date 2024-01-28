import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from '../database/entity/author.entity';
import { BookEntity } from '../database/entity/book.entity';
import { AuthorService } from './author.service';
import { BookService } from './book.service';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity, BookEntity])],
  providers: [AuthorService, BookService],
  exports: [AuthorService, BookService],
})
export class ServiceModule {}
