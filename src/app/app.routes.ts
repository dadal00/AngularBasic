import { Routes } from '@angular/router';
import HomeComponent from './features/home/home.component';
import ProductListComponent from './features/products/components/product-list/product-list.component';
import { ProductDetailComponent } from './features/products/components/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: ':id',
        component: ProductDetailComponent
      }
    ]
  },
];
