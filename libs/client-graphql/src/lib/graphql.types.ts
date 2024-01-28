import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { ClientGraphqlModule } from './client-graphql.module';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Author = {
  __typename?: 'Author';
  books?: Maybe<Array<Book>>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Author>;
  id: Scalars['String']['output'];
  isbn: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type BookCreateInput = {
  authorId: Scalars['String']['input'];
  isbn: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook: Book;
};

export type MutationCreateBookArgs = {
  createBook: BookCreateInput;
};

export type Query = {
  __typename?: 'Query';
  author: Author;
  getAuthors: Array<Author>;
  getBooks: Array<Book>;
};

export type BookComponentFragment = {
  __typename?: 'Book';
  isbn: string;
  name: string;
  author?: { __typename?: 'Author'; name: string } | null;
};

export type BooksPageQueryVariables = Exact<{ [key: string]: never }>;

export type BooksPageQuery = {
  __typename?: 'Query';
  getBooks: Array<{
    __typename?: 'Book';
    isbn: string;
    name: string;
    author?: { __typename?: 'Author'; name: string } | null;
  }>;
};

export type GetAuthorsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAuthorsQuery = {
  __typename?: 'Query';
  getAuthors: Array<{ __typename?: 'Author'; id: string; name: string }>;
};

export type CreateBookMutationVariables = Exact<{
  createBook: BookCreateInput;
}>;

export type CreateBookMutation = {
  __typename?: 'Mutation';
  createBook: {
    __typename?: 'Book';
    isbn: string;
    name: string;
    id: string;
    author?: { __typename?: 'Author'; name: string } | null;
  };
};

export const BookComponentFragmentDoc = gql`
  fragment BookComponent on Book {
    isbn
    name
    author {
      name
    }
  }
`;
export const BooksPageDocument = gql`
  query BooksPage {
    getBooks {
      ...BookComponent
    }
  }
  ${BookComponentFragmentDoc}
`;

@Injectable({
  providedIn: ClientGraphqlModule,
})
export class BooksPageGQL extends Apollo.Query<
  BooksPageQuery,
  BooksPageQueryVariables
> {
  override document = BooksPageDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetAuthorsDocument = gql`
  query GetAuthors {
    getAuthors {
      id
      name
    }
  }
`;

@Injectable({
  providedIn: ClientGraphqlModule,
})
export class GetAuthorsGQL extends Apollo.Query<
  GetAuthorsQuery,
  GetAuthorsQueryVariables
> {
  override document = GetAuthorsDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const CreateBookDocument = gql`
  mutation CreateBook($createBook: BookCreateInput!) {
    createBook(createBook: $createBook) {
      author {
        name
      }
      isbn
      name
      id
    }
  }
`;

@Injectable({
  providedIn: ClientGraphqlModule,
})
export class CreateBookGQL extends Apollo.Mutation<
  CreateBookMutation,
  CreateBookMutationVariables
> {
  override document = CreateBookDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
