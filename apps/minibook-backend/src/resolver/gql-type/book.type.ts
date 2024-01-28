import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Author } from './author.type';
import { z } from 'zod';
export const BOOK_SCHEMA = z.object({
  name: z.string().min(1),
  isbn: z.string().min(1),
  authorId: z.string().uuid().min(1),
});
@InputType()
export class BookCreateInput {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  isbn: string;

  @Field(() => String, { nullable: false })
  authorId: string;
}

@ObjectType()
export class Book {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  isbn: string;

  @Field(() => Author, { nullable: true })
  author?: Author;
}
