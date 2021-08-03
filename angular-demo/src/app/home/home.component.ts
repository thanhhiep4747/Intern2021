import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products?: any = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productService.getProducts();
    console.log(this.products);
  }

  onDeleteProduct(id: any) {
    if (confirm('Are you sure to delete this product')) {
      this.productService.deleteProduct(id);
      this.getProducts();
    }
  }
}
