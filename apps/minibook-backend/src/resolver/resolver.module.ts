import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';
import { BookResolver } from './book.resolver';

@Module({
  imports: [],
  providers: [AuthorResolver, BookResolver],
})
export class ResolverModule {}
