import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/layout/background/background.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.component'),
      },
    ],
  },
];
