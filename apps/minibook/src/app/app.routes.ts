import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./routes/books/books.component').then((m) => m.BooksComponent),
  },
  {
    path: 'create-book',
    pathMatch: 'full',
    loadComponent: () =>
      import('./routes/create-book/create-book.component').then(
        (m) => m.CreateBookComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
