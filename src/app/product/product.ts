import { Component, inject } from '@angular/core';
import { MyService } from '../my-service';
import { AsyncPipe } from '@angular/common';
import { ProductForm } from '../product-form/product-form';
import { ProductCount } from '../product-count/product-count';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-product',
  imports: [AsyncPipe, ProductForm, ProductCount],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  private service = inject(MyService);
 products$ = inject(MyService).products$;
 private route = inject(Router)

 ngOnInit() {
    this.service.load();
  }

  Logout()
  {
    localStorage.removeItem('AccessToken');
    this.route.navigate(['/login'])

  }
}
