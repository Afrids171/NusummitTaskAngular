import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyService {

  constructor(private http:HttpClient){}

  loginURL = "https://localhost:7217/api/Auth/login";
  ProductURL = "https://localhost:7217/api/Product";

  Login(obj:any)
  {
    return this.http.post<any>(this.loginURL,obj);
  }



  private products: any[] = [];
  private productsSubject = new Subject<any[]>();

  products$ = this.productsSubject.asObservable();

load() {
  this.http.get<any[]>(this.ProductURL).subscribe({
    next: list => {
      console.log('API response:', list);
      this.products = list;
      this.productsSubject.next(this.products);
    },
    error: err => console.log('GET failed:', err)
  });
}


  add(product: any) {
  this.http.post<any>(this.ProductURL, product).subscribe(created => {
    this.products = [...this.products, created];
    this.productsSubject.next(this.products);
  });
}
}
