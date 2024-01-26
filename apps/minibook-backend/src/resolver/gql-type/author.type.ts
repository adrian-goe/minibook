import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Book } from './book.type';

@InputType()
export class AuthorInput {
  @Field(() => String, { nullable: false })
  name: string;
}

@ObjectType()
export class Author {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => [Book], { nullable: true })
  books: Book[];
}
