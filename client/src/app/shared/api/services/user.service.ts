import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.local';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.model';
import { User } from '../../model/user.model';

@Injectable()
export class UserService {
  usersUrl = environment + 'users/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.usersUrl);
  }

  getUser(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.usersUrl + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.usersUrl, user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.usersUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.usersUrl + id);
  }
}
