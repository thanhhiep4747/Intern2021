import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products = [];
    this.productService.getProducts().subscribe((products) => {
      products.map((p: any) =>
        this.products.push(
          new Product(p.id, p.name, p.price, p.in_stock, '', p.images, [])
        )
      );
    });
  }

  onDeleteProduct(id: any) {
    if (confirm('Are you sure to delete this product')) {
      debugger
      this.productService
        .deleteProduct(Number(id))
        .subscribe((value) => console.log(value));
    }
  }
}
