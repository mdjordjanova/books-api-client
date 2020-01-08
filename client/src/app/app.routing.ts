import { Routes } from '@angular/router';


export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    loadChildren: () => import('./components/book/book.module').then(m => m.BookModule)
  },
  {
    path: 'authors',
    loadChildren: () => import('./components/author/author.module').then(m => m.AuthorModule)
  }
];
