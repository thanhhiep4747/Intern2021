import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  private apiEndPoint = 'products';

  getProducts(): Observable<any> {
    return this.get(this.apiEndPoint);
  }

  getProduct(id: number): Observable<any> {
    return this.get(`${this.apiEndPoint}/${id}`);
  }

  insertProduct(product: Product): Observable<any> {
    return this.post(this.apiEndPoint, {
      name: product.name,
      price: product.price,
      in_stock: product.inStock,
      images: product.imagesSource,
      sizes: product.sizes,
    });
  }

  updateProduct(product: Product): Observable<any> {
    return this.put(`${this.apiEndPoint}/${product.id}`, {
      name: product.name,
      price: product.price,
      in_stock: product.inStock,
      images: product.imagesSource,
      sizes: product.sizes,
    });
  }

  saveProduct(product: Product): Observable<any> {
    if (product.id) return this.updateProduct(product);
    return this.insertProduct(product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.delete(`${this.apiEndPoint}/${id}`);
  }
}
