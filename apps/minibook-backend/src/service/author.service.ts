import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from '../database/entity/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
  private readonly logger = new Logger(AuthorService.name);

  constructor(
    @InjectRepository(AuthorEntity)
    private authorEntityRepository: Repository<AuthorEntity>
  ) {}

  getAllAuthors() {
    return this.authorEntityRepository.find();
  }
}
