import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';

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
    console.log(this.products);
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

  onDeleteProduct(id: any): void {
    if (confirm('Are you sure to delete this product')) {
      this.productService.deleteProduct(Number(id)).subscribe({
        next: (data) => {
          console.log('deleted');
          this.getProducts();
        },
        error: (error) => {
          console.error('There was an error!', error.message);
        },
      });
    }
  }
}
