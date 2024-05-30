import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private Http=inject(HttpClient);

 GetRandomJoke(): Observable<any>{
    return this.Http.get('https://api.chucknorris.io/jokes/random');
  }

  GetCategories(): Observable<any>{
    return this.Http.get('https://api.chucknorris.io/jokes/categories');
  }
}
