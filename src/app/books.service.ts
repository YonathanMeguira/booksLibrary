import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BooksService {

  constructor(private http: Http) { }
  fetchBooks(): Observable<any> {
    const booksUri = 'src/app/books.json';
    return this.http.get(booksUri)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not fetch the books'));
  }

}
