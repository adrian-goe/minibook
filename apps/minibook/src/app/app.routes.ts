import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./nx-welcome.component').then((m) => m.NxWelcomeComponent),
  },
];
