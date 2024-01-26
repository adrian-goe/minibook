import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'minibook-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {}
