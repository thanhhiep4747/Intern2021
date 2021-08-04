import { Injectable, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService implements OnChanges {
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
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('HAHAAHAHAHA');
  }

  getAllProductInstock() {
    return this.products.filter((product) => product.instock === true);
  }

  getProductById(proId: number) {
    console.log('HAHA', proId);
    return this.products.find((val) => val.proId === proId);
  }

  insertProduct(product: any) {
    product.proId = this.products.length;
    this.products.push(product);
    console.log(this.products);
  }

  removeProductById(proId: number) {
    this.products = this.products.filter((value) => value.proId !== proId);
  }

  getAllSizes() {
    return this.sizes;
  }
}
