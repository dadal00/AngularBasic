import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrls: [
    './product-detail.component.css',
    '../../styles/products-shared.css'
  ]
})
export class ProductDetailComponent implements OnInit {
  id!: string;
  product: Product | undefined;
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.subscription.add(
      this.productService.getProducts().subscribe((data) => {
        this.product = data.find(p => p.id === this.id);
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
