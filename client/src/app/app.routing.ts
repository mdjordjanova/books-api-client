import { Routes } from '@angular/router';
import { AuthGuardService } from './shared/guards/AuthGuardService';
import { RerouteGuardService } from './shared/guards/RerouteGuardService';
import { AppComponent } from './app.component';


export const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [RerouteGuardService]
  },
  {
    path: 'books',
    loadChildren: () => import('./components/book/book.module').then(m => m.BookModule),
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./components/authentication/authentication.module').then(m => m.AuthenticationModule)
  }
];
