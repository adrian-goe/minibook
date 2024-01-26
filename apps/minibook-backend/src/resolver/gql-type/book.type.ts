import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Author } from './author.type';

@InputType()
export class BookCreateInput {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  isbn: string;
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
