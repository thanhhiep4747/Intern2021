import { PRODUCTS } from './mock-products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: any[];

  constructor() {
    this.products = PRODUCTS;
  }

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find((p) => p.id === id);
  }

  saveProduct(product: any) {
    product.sizes = [
      '3.5 UK',
      '4 UK',
      '4.5 UK',
      '5 UK',
      '5.5 UK',
      '6 UK',
      '6.5 UK',
      '7 UK',
      '7.5 UK',
      '8 UK',
      '8.5 UK',
      '9 UK',
      '9.5 UK',
      '10 UK',
      '10.5 UK',
      '11 UK',
      '11.5 UK',
      '12 UK',
      '12.5 UK',
    ];
    if (product.id) {
      const newProducts = [...this.products];
      const index = newProducts.indexOf(
        newProducts.filter((p) => p.id === product.id)
      );
      newProducts[index] = product;
      this.products = newProducts;
    }
    product.id = this.products.length + 1;
    this.products = [...this.products, product];
  }
}
