import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './graphql/schema.gql',
  documents: './apps/minibook/src/app/**/*.graphql',
  generates: {
    'libs/client-graphql/src/lib/graphql.types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-apollo-angular',
      ],
      config: {
        defaultScalarType: 'unknown',
        addExplicitOverride: true,
        ngModule: './client-graphql.module#ClientGraphqlModule',
      },
    },
  },
};
export default config;
