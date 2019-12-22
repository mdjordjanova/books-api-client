import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookAddComponent } from './book-add/book-add.component';

export const bookRoutes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'add',
    component: BookAddComponent
  },
  {
    path: ':id',
    component: BookDetailsComponent
  }
];
