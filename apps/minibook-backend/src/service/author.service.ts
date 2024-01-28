import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from '../database/entity/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorEntity)
    private authorEntityRepository: Repository<AuthorEntity>
  ) {}

  getAllAuthors() {
    return this.authorEntityRepository.find();
  }

  getById(id: string) {
    return this.authorEntityRepository.findOneBy({ id });
  }
}
