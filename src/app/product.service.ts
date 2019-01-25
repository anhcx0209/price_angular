import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import Product from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:4000/search'
  constructor(private http: HttpClient) { }

  doSearch(name: string, source: string): Observable<Product[]> {
    console.log("Params " + name + " " + source);
    let ps = new HttpParams().set('kw', name).append('sr', source);
    return this.http.get<Product[]>(this.uri, { params: ps });
  }

}
