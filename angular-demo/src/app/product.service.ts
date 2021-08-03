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
    if (product.id) {
      const newProducts = [...this.products];
      const index = newProducts.indexOf(
        newProducts.filter((p) => p.id === product.id)[0]
      );
      newProducts[index] = product;
      this.products = newProducts;
      return;
    }
    product.id = this.products.length + 1;
    this.products = [...this.products, product];
  }

  deleteProduct(productId: any) {
    this.products = this.products.filter((p) => p.id !== productId);
  }
}
