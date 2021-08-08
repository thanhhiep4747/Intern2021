import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductDetail } from './model/product-detail';
import { CreateProductDto } from './model/create-product-dto';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  products: Product[] = [
    new Product(1,4,
    ["3.5 UK", "4 UK"],
    "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6a0d6246e26a4852825dad3900baddfd_9366/Giay_adidas_Ultraboost_x_LEGO(r)_Colors_trang_FZ3983_01_standard.jpg",
    2500000,
    "Giày adidas Ultraboost x LEGO® Colors",
    "Nam Chạy"),
    new Product(2,1,
    ["3.5 UK", "4 UK"],
    "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3c4067b13da442efba23ad1e01567a30_9366/Giay_adidas_Superstar_x_LEGO(r)_trang_GW5270_01_standard.jpg",
    3500000,
    "Giày adidas Superstar x LEGO®",
    "Originals"),
    new Product(3,1,
    ["3.5 UK", "4 UK"],
    "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1f2a7fdfce904958b50fad22000a088d_9366/gi%C3%A0y-forum-low.jpg",
    2500000,
    "Giày Forum Low",
    "Nam Originals"),
    new Product(4,1,
    ["3.5 UK", "4 UK"],
    "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ffdcc6cacd9b4c16b85eac7900cb1137_9366/gi%C3%A0y-ultraboost-21.jpg",
    5000000,
    "Giày UltraBoost 21",
    "Chạy"),
    new Product(5,1,
      ["3.5 UK", "4 UK"],
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ffdcc6cacd9b4c16b85eac7900cb1137_9366/gi%C3%A0y-ultraboost-21.jpg",
      5000000,
      "Giày UltraBoost 21",
      "Chạy"),
    new Product(6,1,
      ["3.5 UK", "4 UK"],
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ffdcc6cacd9b4c16b85eac7900cb1137_9366/gi%C3%A0y-ultraboost-21.jpg",
      5000000,
      "Giày UltraBoost 21",
      "Chạy")
    ];
    getProducts(){
      return this.products;
    }
    getAllProducts(): Observable<any> {
      return this.http.get("http://localhost:3000/api/products");
    }
    getProduct(id: number): Observable<any> {
      return this.http.get(`http://localhost:3000/api/products/${id}`);
    }
    addProduct(product: CreateProductDto){
      //this.products.push(product);
      return this.http.post(`http://localhost:3000/api/products`, product);
    }
    updateProduct(id: number, product: CreateProductDto){
      return this.http.put(`http://localhost:3000/api/products/${id}`, product);
    }
    removeProduct(id: number){
      return this.http.delete(`http://localhost:3000/api/products/${id}`);
    }
}
// interface Shoes {
//   id: number;
//   quantity: number;
//   sizes: string[];
//   imageUrl: string;
//   price: number;
//   description: string;
//   category: string;
// }
// class Shoes {
//   constructor(id: number, quantity: number, sizes: string[],imageUrl: string, price: number ,desription: string, category: string){
//       this.id = id;
//       this.quantity = quantity;
//       this.sizes = sizes;
//       this.imageUrl = imageUrl;
//       this.price = price;
//       this.description = desription;
//       this.category = category;
//   }
// }
