import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book.component';

@Component({
  selector: 'minibook-nx-welcome',
  standalone: true,
  imports: [CommonModule, BookComponent],
  template: ` <minibook-book></minibook-book> `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
