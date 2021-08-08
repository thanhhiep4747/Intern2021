import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from './product/product.service';
import { MatDialog } from '@angular/material/dialog';
import { AddItemComponent } from '../add-item/add-item.component';
import { BaseComponent } from '../common/base.component';
import {takeUntil} from 'rxjs/operators';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends BaseComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private router: Router,
    private productService: ProductService,
    public dialog: MatDialog
  ) {
    super()
  }



  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (res) => {

          this.products = res;
          console.log(this.products)
        },
        (err) => {
          console.log(err);
        }
      );

  }

  onRemoveItem(id: number){
    this.productService.removeProduct(id)
    .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (res: any) => {
          if(res.status === 1){
            this.getProducts();
          }
          else{
            console.log('err');
          }
        }
      );

  }

  onSelect(product: Product) {
    this.router.navigate(['/product-details', product.productId]);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddItemComponent);

    dialogRef.afterClosed().subscribe(result => {
      let listSize: any[] = [];



      Object.keys(result).map((key, index) => {
        if (result[key] === true) {
          listSize.push(+key.replace('size',''))
        }

      })


      const res = {
        id: Date.now(),
        title: result.productname,
        price: result.price,
        image: result.image ? result.image : 'https://assets.adidas.com/images/w_600,f_auto,q_auto/1bf4aadbff104009b8b5ad41000f7758_9366/Giay_Forum_Low_Donovan_Mitchell_trang_GY8287_01_standard.jpg',
        size: listSize
      }

      console.log(res)
      // this.productService.appendItem(res);
    });


  }


}
