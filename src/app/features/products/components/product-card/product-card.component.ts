import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: '[product-card]',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrls: [
    './product-card.component.css',
    '../../styles/products-shared.css',
  ],
  standalone: true,
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() clicked = new EventEmitter<string>();

  clickedProduct() {
    this.clicked.emit(this.product.id);
  }
}
