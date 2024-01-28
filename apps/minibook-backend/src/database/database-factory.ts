import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { testdata } from './testdata';
import { migrations } from './migrations';
import { ConfigurationService } from '../configuration/configuration.service';
import { BookEntity } from './entity/book.entity';
import { AuthorEntity } from './entity/author.entity';

export function databaseFactory(
  configService: ConfigurationService
): TypeOrmModuleOptions {
  let allMigrations = migrations;

  if (configService.isDevelopment) {
    allMigrations = [...allMigrations, ...testdata];
  }

  let config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: configService.databaseHost,
    port: configService.databasePort,
    username: configService.databaseUser,
    password: configService.databasePassword,
    database: configService.databaseName,
    migrationsTransactionMode: 'each',
    autoLoadEntities: true,
    migrations: allMigrations,
    synchronize: false,
    ssl: configService.isProduction,
    logging: ['error'],
    entities: [AuthorEntity, BookEntity],
  };

  if (configService.isProduction) {
    config = {
      ...config,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    };
  }

  return config;
}

export async function datasourceFactory(
  options: DataSourceOptions | undefined
) {
  if (!options) {
    throw new Error('Missing datasource options');
  }

  const dataSource = await new DataSource(options).initialize();
  await dataSource.runMigrations();
  return dataSource;
}
