import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './guards/AuthGuardService';
import { RerouteGuardService } from './guards/RerouteGuardService';

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
    RerouteGuardService
  ]
})
export class SharedModule { }
