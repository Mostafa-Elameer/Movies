import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  path: string = "https://image.tmdb.org/t/p/w500"
  _httpClint = inject(HttpClient)
  constructor() { }

  GetMovise(path: any): Observable<any> {
    return this._httpClint.get(path)
  }

}
