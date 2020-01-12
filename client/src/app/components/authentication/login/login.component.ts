import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  template: `
      <mat-card class="login-card">
          <img mat-card-image src="../../../assets/images/cover1.png" alt="">
          <mat-card-content class="login-card__content">
              <form class="login-form" [formGroup]="form">
                  <div>
                      <label>Username</label>
                      <mat-form-field>
                          <input matInput formControlName="username">
                      </mat-form-field>
                  </div>

                  <div>
                      <label>Password</label>
                      <mat-form-field>
                          <input matInput formControlName="username">
                      </mat-form-field>
                  </div>
              </form>

              <mat-card-actions>
                  <button mat-raised-button color="primary" class="login-button">Login</button>
              </mat-card-actions>
          </mat-card-content>
      </mat-card>
  `
})
export class LoginComponent {
  form = new FormGroup({
    username: new FormControl('', []),
    password: new FormControl('', [])
  });
}
