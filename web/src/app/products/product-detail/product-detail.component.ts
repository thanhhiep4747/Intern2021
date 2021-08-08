import { ProductsService } from './../products.service';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  @Output() currentProduct: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    public productSerivce: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ proId }) => {
      this.productSerivce.getProductById(proId).subscribe((res) => {
        this.currentProduct = res;
      });
    });
  }
}
