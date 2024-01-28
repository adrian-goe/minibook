import { Field, ObjectType } from '@nestjs/graphql';
import { Book } from './book.type';

@ObjectType()
export class Author {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => [Book], { nullable: true })
  books: Book[];
}
