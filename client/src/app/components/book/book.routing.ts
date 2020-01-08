import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';

export const bookRoutes: Routes = [
  {
    path: '',
    component: BookListComponent
  }
];
