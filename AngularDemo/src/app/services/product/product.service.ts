import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';
import { productDB } from '../../fake-db';
import { Product } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {

  public getData(): Observable<any> {
    return this.get('');
  }

  public getProduct(): Array<Product> {
    return productDB.getData();
  }

  public updateLike(item: Product): void {
    productDB.updateLiked(item);
  }

  public addItem(name: string, type: number, imgSrc: string, description: string): Observable<any> {
    const newProduct: Product = {
      id: productDB.getData().length,
      type: type,
      name: name,
      img: imgSrc,
      liked: false,
      description: description
    }
    productDB.add(newProduct);
    return this.post('', null);
  }

  public updateItem(id: number, name: string, type: number, imgSrc: string, description: string): Observable<any> {
    const newProduct: Product = {
      id: id,
      type: type,
      name: name,
      img: imgSrc,
      liked: false,
      description: description
    }
    productDB.update(id, newProduct);
    return this.put('', null);
  }

  public removeItem(id: number): Observable<any> {
    productDB.remove(id);
    return this.delete('');
  }

}
