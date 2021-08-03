import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../list-product/Iproduct';
import { PRODUCTS, _addProduct, _removeProduct } from '../list-product/mock-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}

  getAllProducts(): Observable<Product[]> {
    const products = of(PRODUCTS);
    return products;
  }

  getProduct(id: number): Observable<Product>{
    const product = PRODUCTS.find(item => item.id == id)!;
    return of(product);
  }

  getLastedId():number{
    let lastedId: number = 0
    for(const x of PRODUCTS){
      if (x.id > lastedId){ 
        lastedId = x.id;
      }
    }
    return lastedId + 1
  }
  removeProduct(id: number): Observable<Product[]>{
    const newListProduct = of(_removeProduct(id))
    return newListProduct
  }

  addProduct(newProduct: Product): Observable<Product[]>{
    
    const newListProduct = of(_addProduct(newProduct))
    return newListProduct
  }

}
