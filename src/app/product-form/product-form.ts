import { Component, inject } from '@angular/core';
import { MyService } from '../my-service';
import { FormsModule } from '@angular/forms';
import { ProductCount } from '../product-count/product-count';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {


   private productService = inject(MyService);

  name = '';
  price = 0;

  add() {
    if (!this.name) return;
    this.productService.add({ name : this.name, price: this.price });
    this.name = '';
    this.price = 0;
  }
}
