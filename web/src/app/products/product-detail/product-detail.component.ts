import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  currentProduct: any | undefined;
  constructor(
    private route: ActivatedRoute,
    public productSerivce: ProductsService
  ) {
    // this.currentProduct = productSerivce.getProductById(0);
  }

  ngOnInit(): void {
    this.route.params.subscribe(({ proId }) => {
      this.currentProduct = this.productSerivce.getProductById(+proId);
      console.log(this.currentProduct);
    });
  }
}
