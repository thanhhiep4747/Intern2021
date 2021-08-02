import { PRODUCTS } from './mock-products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  getProducts() {
    return PRODUCTS
  }

  getProduct(id: number) {
    return PRODUCTS.find(p => p.id === id)
  }
  
}
