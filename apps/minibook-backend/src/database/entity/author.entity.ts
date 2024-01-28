import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BookEntity } from './book.entity';

@Entity('author')
export class AuthorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => BookEntity, (book) => book.author)
  books: BookEntity[];
}
