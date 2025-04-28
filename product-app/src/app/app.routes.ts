import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/background/background.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.component'),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./features/products/product-list/product-list.component'),
      },
    ],
  },
];
