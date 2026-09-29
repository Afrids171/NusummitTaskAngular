import { Component, inject } from '@angular/core';
import { MyService } from '../my-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-count',
  imports: [AsyncPipe],
  templateUrl: './product-count.html',
  styleUrl: './product-count.css',
})
export class ProductCount {
  products$ = inject(MyService).products$;
}
