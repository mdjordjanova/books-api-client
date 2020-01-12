import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { authRoutes } from './authentication.routing';


@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(authRoutes),
    SharedModule
  ],
  providers: []
})
export class AuthenticationModule { }
