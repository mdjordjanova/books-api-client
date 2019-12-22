import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../../shared/model/book';

@Injectable({providedIn: 'root'})
export class BookService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getBookList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/books`);
  }

  getBook(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/books/${id}`);
  }

  createBook(book: Book): Observable<any> {
    return this.http.post(`${this.baseUrl}/books`, book);
  }

  updateBook(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/books/${id}`, value);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/books/${id}`, { responseType: 'text' });
  }
}
