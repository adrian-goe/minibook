import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../app/app.module';

export async function gqlTestQuery(
  app: INestApplication,
  query: string,
  variables: unknown = {}
) {
  return request(app.getHttpServer()).post('/graphql').send({
    query,
    variables,
  });
}

export async function setupTestApp() {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();
  return moduleFixture.createNestApplication();
}
