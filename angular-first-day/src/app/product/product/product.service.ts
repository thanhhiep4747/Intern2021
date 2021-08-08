import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { BaseService } from '../../common/services/base.service';
import { Product } from '../../models/product';
@Injectable({
  providedIn: 'root'
})

export class ProductService extends BaseService {

  getProducts(): Observable<Product[]>{
    return this.get('product');
  }


  getProduct(id : number): Observable<any>{
    return this.get(`product/${id}`);
  }
  removeProduct(id: number): Observable<any>{
    return this.delete(`product/${id}`);

  }

  // appendItem(item: DataProduct): void{
  //   this.PRODUCTS.push(item);
  //   console.log(item)
  // }
}
