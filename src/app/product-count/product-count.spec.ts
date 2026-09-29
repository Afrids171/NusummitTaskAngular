import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCount } from './product-count';

describe('ProductCount', () => {
  let component: ProductCount;
  let fixture: ComponentFixture<ProductCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCount],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
