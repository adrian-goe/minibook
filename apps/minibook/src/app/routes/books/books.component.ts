import { Component, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {
  BooksPageGQL,
  BooksPageQuery,
  ClientGraphqlModule,
} from '@minibook/client-graphql';
import { filter, map, Observable, startWith } from 'rxjs';
import { BookComponent } from '../../components/book.component';

type Books = Array<BooksPageQuery['getBooks'][0]>;

@Component({
  selector: 'minibook-books',
  standalone: true,
  imports: [CommonModule, BookComponent, ClientGraphqlModule, NgIf],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent {
  private booksGQL = inject(BooksPageGQL);
  query = this.booksGQL.watch({}, { useInitialLoading: true });

  books$: Observable<Books> = this.query.valueChanges.pipe(
    filter((result) => !!result.data),
    map((result) => result.data.getBooks)
  );

  booksLoading$: Observable<boolean> = this.query.valueChanges.pipe(
    startWith({ loading: true }),
    map(({ loading }) => loading)
  );
}
