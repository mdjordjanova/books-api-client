import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.local';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.model';
import { Book } from '../../model/book.model';

@Injectable()
export class BookService {
  booksUrl = environment + 'books/';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.booksUrl);
  }

  getBook(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.booksUrl + id);
  }

  createBook(book: Book): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.booksUrl, book);
  }

  updateBook(book: Book): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.booksUrl + book.id, book);
  }

  deleteBook(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.booksUrl + id);
  }
}
