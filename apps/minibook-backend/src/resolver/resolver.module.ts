import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';
import { BookResolver } from './book.resolver';
import { ServiceModule } from '../service/service.module';

@Module({
  imports: [ServiceModule],
  providers: [AuthorResolver, BookResolver],
})
export class ResolverModule {}
