import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationService } from '../configuration/configuration.service';
import { ConfigurationModule } from '../configuration/configuration.module';
import { databaseFactory, datasourceFactory } from './database-factory';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      useFactory: databaseFactory,
      dataSourceFactory: datasourceFactory,
      inject: [ConfigurationService],
    }),
  ],
})
export class DatabaseModule {}
