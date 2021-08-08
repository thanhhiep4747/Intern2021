import { BaseService } from './../common/services/base.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends BaseService {
  products = [
    {
      proId: 0,
      name: 'ADIDAS 0',
      price: 5,
      instock: true,
      sizes: [3.5, 4, 4.5, 5, 5.5, 6],
      image: `https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/58a87be838b8404796c9ad3900bb2ebb_9366/giày-adidas-ultraboost-x-lego-colors.jpg`,
    },
    {
      proId: 1,
      name: 'ADIDAS 1',
      price: 10,
      instock: true,
      sizes: [3.5, 4, 4.5, 5, 5.5, 6],
      image: `https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/58a87be838b8404796c9ad3900bb2ebb_9366/giày-adidas-ultraboost-x-lego-colors.jpg`,
    },
    {
      proId: 2,
      name: 'ADIDAS 2',
      price: 15,
      instock: true,
      sizes: [3.5, 4, 4.5, 5, 5.5, 6],
      image: `https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/58a87be838b8404796c9ad3900bb2ebb_9366/giày-adidas-ultraboost-x-lego-colors.jpg`,
    },
    {
      proId: 3,
      name: 'ADIDAS 3',
      price: 5,
      instock: true,
      sizes: [3.5, 4, 4.5, 5, 5.5, 6],
      image: `https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/58a87be838b8404796c9ad3900bb2ebb_9366/giày-adidas-ultraboost-x-lego-colors.jpg`,
    },
    {
      proId: 4,
      name: 'ADIDAS 4',
      price: 10,
      instock: true,
      sizes: [3.5, 4, 4.5, 5, 5.5, 6],
      image: `https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/58a87be838b8404796c9ad3900bb2ebb_9366/giày-adidas-ultraboost-x-lego-colors.jpg`,
    },
    {
      proId: 5,
      name: 'ADIDAS 5',
      price: 15,
      instock: true,
      sizes: [3.5, 4, 4.5, 5, 5.5, 6],
      image: `https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/58a87be838b8404796c9ad3900bb2ebb_9366/giày-adidas-ultraboost-x-lego-colors.jpg`,
    },
    {
      proId: 6,
      name: 'ADIDAS 6',
      price: 5,
      instock: true,
      sizes: [3.5, 4, 4.5, 5, 5.5, 6],
      image: `https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/58a87be838b8404796c9ad3900bb2ebb_9366/giày-adidas-ultraboost-x-lego-colors.jpg`,
    },
    {
      proId: 7,
      name: 'ADIDAS 7',
      price: 10,
      instock: true,
      sizes: [3.5, 4, 4.5, 5, 5.5, 6],
      image: `https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/58a87be838b8404796c9ad3900bb2ebb_9366/giày-adidas-ultraboost-x-lego-colors.jpg`,
    },
    {
      proId: 8,
      name: 'ADIDAS 8',
      price: 15,
      instock: true,
      sizes: [3.5, 4, 4.5, 5, 5.5, 6],
      image: `https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/58a87be838b8404796c9ad3900bb2ebb_9366/giày-adidas-ultraboost-x-lego-colors.jpg`,
    },
    {
      proId: 9,
      name: 'ADIDAS 9',
      price: 5,
      instock: true,
      sizes: [3.5, 4, 4.5, 5, 5.5, 6],
      image: `https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/58a87be838b8404796c9ad3900bb2ebb_9366/giày-adidas-ultraboost-x-lego-colors.jpg`,
    },
    {
      proId: 10,
      name: 'ADIDAS 10',
      price: 10,
      instock: true,
      sizes: [3.5, 4, 4.5, 5, 5.5, 6],
      image: `https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/58a87be838b8404796c9ad3900bb2ebb_9366/giày-adidas-ultraboost-x-lego-colors.jpg`,
    },
    {
      proId: 11,
      name: 'ADIDAS 11',
      price: 15,
      instock: false,
      sizes: [3.5, 4, 4.5, 5, 5.5, 6],
      image: `https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/58a87be838b8404796c9ad3900bb2ebb_9366/giày-adidas-ultraboost-x-lego-colors.jpg`,
    },
  ];

  sizes = [
    3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
    12.5,
  ];
  constructor(public http: HttpClient) {
    super(http);
  }

  getAllProductInstock() {
    return this.get('products');
  }

  getProductById(proId: number) {
    return this.get(`products/${proId}`);
  }

  insertProduct(product: any) {
    return this.post('products', product);
  }

  removeProductById(proId: number) {
    return this.delete(`products/${proId}`);
  }

  getAllSizes() {
    return this.get('sizes');
  }
}
