import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./routes/books/books.component').then((m) => m.BooksComponent),
  },

  {
    path: '**',
    redirectTo: '',
  },
];
