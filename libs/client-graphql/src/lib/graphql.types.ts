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

export type AuthorInput = {
  name: Scalars['String']['input'];
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Author>;
  id: Scalars['String']['output'];
  isbn: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type BookCreateInput = {
  isbn: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor: Author;
  createBook: Book;
};

export type MutationCreateAuthorArgs = {
  createAuthor: AuthorInput;
};

export type MutationCreateBookArgs = {
  createBook: BookCreateInput;
};

export type Query = {
  __typename?: 'Query';
  author: Author;
  book: Book;
  getBooks: Array<Book>;
};

export type GetBooksQueryVariables = Exact<{ [key: string]: never }>;

export type GetBooksQuery = {
  __typename?: 'Query';
  book: { __typename?: 'Book'; isbn: string; name: string };
};

export type BookComponentFragment = {
  __typename?: 'Book';
  isbn: string;
  name: string;
};

export type BooksPageQueryVariables = Exact<{ [key: string]: never }>;

export type BooksPageQuery = {
  __typename?: 'Query';
  getBooks: Array<{ __typename?: 'Book'; isbn: string; name: string }>;
};

export const BookComponentFragmentDoc = gql`
  fragment BookComponent on Book {
    isbn
    name
  }
`;
export const GetBooksDocument = gql`
  query GetBooks {
    book {
      ...BookComponent
    }
  }
  ${BookComponentFragmentDoc}
`;

@Injectable({
  providedIn: ClientGraphqlModule,
})
export class GetBooksGQL extends Apollo.Query<
  GetBooksQuery,
  GetBooksQueryVariables
> {
  override document = GetBooksDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
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
