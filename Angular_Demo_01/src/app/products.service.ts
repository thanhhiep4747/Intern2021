import { Injectable } from '@angular/core';
import { product} from 'src/data/products';
import { Observable } from 'rxjs';
import { BaseService } from './common/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService {
  // products?:product[]
  // constructor() { 
  //   this.products=products
  // }
  // getPorducts(){
  //   return this.products
  // }
  // addProduct(product:product){
  //   this.products?.push(product)
  // }
  // removeProduct(product_id:number){
  //   this.products?.splice(product_id,1);
  // }
  // findProduct(id:number){
  //   return this.products?.find(product=>product.id===id);
  // }
  // getLenghtProducts(){
  //   return this.products?.length
  // }
  // updateProduct(id:number,name:string,
  //   price:number,
  //   img:string,
  //   size:number[],
  //   detail:string){
  //   if (this.products){
  //     this.products[id].name=name;
  //     this.products[id].price=price;
  //     this.products[id].size=size;
  //     this.products[id].detail=detail;
  //   }
  // }
  public getPorducts():Observable<any>{
    return this.get('products')
  }
  public addProduct(obj:product):Observable<any>{
    return this.post('add-product',obj)
  }
  public removeProduct(id:number){
    return this.delete(`products/${id}`)
  }
  public getDetailProduct(id:number){
    return this.get(`products/${id}`)
  }
  public updateProduct(id:number,obj:product){
    return this.put(`products/${id}`,obj)
  }
  public getAllSize(){
    return this.get('products/size')
  }
}
