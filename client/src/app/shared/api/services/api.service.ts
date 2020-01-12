import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApiResponse } from '../model/api.model';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment.local';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}

  login(loginPayload): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(environment.baseUrl + 'token/generate-token', loginPayload).pipe(
      catchError(val => of(val)));
  }
}
