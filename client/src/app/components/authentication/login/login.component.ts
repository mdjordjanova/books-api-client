import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../../../shared/api/services/api.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  template: `
      <mat-card class="login-card">
          <h1>Sign In</h1>
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
                  <button mat-raised-button color="primary" class="login-button" (click)="login()">Login</button>
              </mat-card-actions>
          </mat-card-content>
      </mat-card>
  `
})
export class LoginComponent implements OnInit {
  invalidLogin = false;
  form = new FormGroup({
    username: new FormControl('', []),
    password: new FormControl('', [])
  });

  constructor(
    private router: Router,
    private apiService: ApiService) {}

  ngOnInit() {
    window.localStorage.removeItem('token');
  }

  login() {
    const loginPayload = {
      username: this.form.controls.username.value,
      password: this.form.controls.password.value
    };

    this.apiService.login(loginPayload).pipe(
      map(data => {
        if (data.status === 200) {
          window.localStorage.setItem('token', data.result.token);
          this.router.navigate(['books']);
        } else {
          this.invalidLogin = true;
        }
      })
    );
  }
}
