import { Routes } from '@angular/router';


export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    loadChildren: () => import('./modules/components/book/book.module').then(m => m.BookModule)
  }
];
