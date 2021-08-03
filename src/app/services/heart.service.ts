import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeartService {

  productList: String[] = [];

  constructor() { }

  getWishList() {
    return this.productList;
  }

  addToWishlist(productID) {
    this.productList.push(productID);
  }

  removeFromWishlist(productID) {
    delete this.productList[productID];
  }

}
