import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http : HttpClient) { }
  getProduct()
  {
    return this.http.get<any>("http://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
