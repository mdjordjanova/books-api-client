import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { AuthGuardService } from '../../shared/guards/AuthGuardService';

export const bookRoutes: Routes = [
  {
    path: '',
    component: BookListComponent,
    canActivate: [AuthGuardService]
  }
];
