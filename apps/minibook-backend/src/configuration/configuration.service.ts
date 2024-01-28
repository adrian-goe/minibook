import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

@Injectable()
export class ConfigurationService {
  constructor(private config: ConfigService) {}

  get port(): number {
    return this.getSafe<number>('PORT');
  }

  get environment(): Environment {
    return this.getSafe<Environment>('NODE_ENV');
  }

  get isDevelopment(): boolean {
    return this.environment === Environment.DEVELOPMENT;
  }

  get isProduction(): boolean {
    return this.environment === Environment.PRODUCTION;
  }

  get databaseHost(): string {
    return this.getSafe<string>('POSTGRES_HOST');
  }

  get databasePort(): number {
    return +this.getSafe<number>('POSTGRES_PORT');
  }

  get databaseUser(): string {
    return this.getSafe<string>('POSTGRES_USER');
  }

  get databasePassword(): string {
    return this.getSafe<string>('POSTGRES_PASSWORD');
  }

  get databaseName(): string {
    return this.getSafe<string>('POSTGRES_NAME');
  }

  private getSafe<T>(path: string): T {
    const value = this.config.get<T>(path);

    if (!value) {
      throw new Error(`Configuration value at ${path} is undefined`);
    }

    return value;
  }
}
