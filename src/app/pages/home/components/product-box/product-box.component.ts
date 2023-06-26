import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit {
@Input() fullWidthMode = false;
product : Product | undefined = {
  id: 1,
  title: 'Product 1',
  price: 100,
  category: 'Category 1',
  description: 'Description 1',
  image: 'https://via.placeholder.com/150'
};

@Output() addToCart = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
