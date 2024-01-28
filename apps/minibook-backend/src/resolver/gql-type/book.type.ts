import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Author } from './author.type';

@InputType()
export class BookCreateInput {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => Number, { nullable: false })
  isbn: number;
}

@ObjectType()
export class Book {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => Number, { nullable: false })
  isbn: number;

  @Field(() => Author, { nullable: true })
  author?: Author;
}
