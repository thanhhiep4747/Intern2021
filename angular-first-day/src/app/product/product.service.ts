import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataProduct } from './dataProduct';
import { DATAPRODUCT } from './mock-data';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  PRODUCTS = DATAPRODUCT;

  getProducts(): Observable<DataProduct[]>{
    const products = of(this.PRODUCTS);
    return products;
  }
  getLength(): number{
    return this.PRODUCTS.length;
  }

  getDetailsItem(id : number): any{
    for(const item of this.PRODUCTS){
      if(id === item.id){
        return item;
      }
    }
  }
  removeItem(id: number): void{
    for(const [index, item] of this.PRODUCTS.entries()){
      if(id === item.id){
        this.PRODUCTS.splice(index, 1);
      }
    }

  }

  appendItem(item: DataProduct): void{
    this.PRODUCTS.push(item);
    console.log(item)
  }
}
