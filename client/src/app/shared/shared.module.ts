import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './guards/AuthGuardService';
import { RerouteGuardService } from './guards/RerouteGuardService';
import {ApiService} from './api/services/api.service';
import {BookService} from './api/services/book.service';
import {UserService} from './api/services/user.service';

const materialModule = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule
];

@NgModule({
  declarations: [],
  exports: [
    materialModule,
    ReactiveFormsModule
  ],
  imports: [
    materialModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuardService,
    RerouteGuardService,
    ApiService,
    BookService,
    UserService
  ]
})
export class SharedModule { }
