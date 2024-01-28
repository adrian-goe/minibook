import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  BookCreateInput,
  ClientGraphqlModule,
  CreateBookGQL,
  GetAuthorsGQL,
  GetAuthorsQuery,
} from '@minibook/client-graphql';
import { filter, map, Observable, Subject } from 'rxjs';
import { isbn13Validator } from '../../utils/isbn.validator';

type Authors = Array<GetAuthorsQuery['getAuthors'][0]>;

@Component({
  selector: 'minibook-create-book',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientGraphqlModule,
  ],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.scss',
})
export class CreateBookComponent {
  private router = inject(Router);
  private booksGQL = inject(GetAuthorsGQL);
  private createBookGQL = inject(CreateBookGQL);

  submissionError = '';

  query = this.booksGQL.watch({}, { useInitialLoading: true });

  authors$: Observable<Authors> = this.query.valueChanges.pipe(
    filter((result) => !!result.data),
    map((result) => result.data.getAuthors)
  );

  createRideInput$ = new Subject<BookCreateInput>();

  form = new FormGroup(
    {
      bookName: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      bookIsbn: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      bookAuthor: new FormControl<string>('', [Validators.required]),
    },
    { validators: [isbn13Validator('bookIsbn')] }
  );

  async onSubmit() {
    const { bookName, bookIsbn, bookAuthor } = this.form.value;
    if (!bookName || !bookIsbn || !bookAuthor) {
      return;
    }

    this.createBookGQL
      .mutate(
        {
          createBook: {
            authorId: bookAuthor,
            isbn: bookIsbn.replace(/[^0-9X]/gi, ''),
            name: bookName,
          },
        },
        { useMutationLoading: true }
      )
      .subscribe({
        next: (result) => {
          if (result.data?.createBook.id) {
            this.router.navigate(['/']);
          }
        },
        error: (error) => {
          this.submissionError = new Error(error).message.includes(
            'book_isbn_key'
          )
            ? 'The isbn already exist'
            : 'There is an unknown error';
        },
      });
  }
}
