import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksPageQuery } from '@minibook/client-graphql';

type Book = BooksPageQuery['getBooks'][0];

@Component({
  selector: 'minibook-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  @Input() book!: Book;

  getimageurl() {
    return `https://picsum.photos/seed/${this.book.isbn}/600/300`;
  }
}
