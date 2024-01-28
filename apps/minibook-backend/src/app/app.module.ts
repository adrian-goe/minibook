import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ResolverModule } from '../resolver/resolver.module';
import { DatabaseModule } from '../database/database.module';
import { ConfigurationModule } from '../configuration/configuration.module';
import { JoiPipeModule } from 'nestjs-joi';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => {
        return {
          autoSchemaFile: join(process.cwd(), 'graphql/schema.gql'),
          context: ({ req, res }) => ({ req, res }),
          sortSchema: true,
          transformAutoSchemaFile: true,
          playground: false,
          plugins: [
            ApolloServerPluginLandingPageLocalDefault(),
            ApolloServerPluginInlineTrace(),
          ],
        };
      },
      imports: [],
      inject: [],
    }),
    JoiPipeModule.forRoot({
      pipeOpts: { defaultValidationOptions: { stripUnknown: true } },
    }),

    ResolverModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
