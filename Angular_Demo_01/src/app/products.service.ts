import { Injectable } from '@angular/core';
import { product,products } from 'src/data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products?:product[]
  constructor() { 
    this.products=products
  }
  getPorducts(){
    return this.products
  }
  addProduct(product:product){
    this.products?.push(product)
  }
  removeProduct(product_id:number){
    this.products?.splice(product_id,1);
  }
  findProduct(id:number){
    return this.products?.find(product=>product.id===id);
  }
  getLenghtProducts(){
    return this.products?.length
  }
  updateProduct(id:number,name:string,
    price:number,
    img:string,
    size:number[],
    detail:string){
    if (this.products){
      this.products[id].name=name;
      this.products[id].price=price;
      this.products[id].size=size;
      this.products[id].detail=detail;
    }
  }
}
