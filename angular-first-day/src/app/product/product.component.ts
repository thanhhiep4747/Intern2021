import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataProduct } from './dataProduct';
import { ProductService } from './product.service';
import {MatDialog} from '@angular/material/dialog';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products:  DataProduct[] = [];

  constructor(
    private router: Router,
    private productService: ProductService,
    public dialog: MatDialog
  ) {}



  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void{
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  onRemoveItem(id: number){
    this.productService.removeItem(id);

  }

  onSelect(product: DataProduct) {
    this.router.navigate(['/product-details', product.id]);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddItemComponent);

    dialogRef.afterClosed().subscribe(result => {
      let listSize: string[] = [];

      console.log(result.image)
      Object.keys(result).map( (key, index) => {
        if(result[key] === true){
          switch (key) {
            case 'size35':
              listSize.push('3.5 UK');
              break;

            case 'size4':
              listSize.push('4 UK');
              break;

            case 'size45':
              listSize.push('4.5 UK');
              break;

            case 'size5':
              listSize.push('5 UK');
              break;

            case 'size55':
              listSize.push('5.5 UK');
              break;

            case 'size6':
              listSize.push('6 UK');
              break;

            case 'size65':
              listSize.push('6.5 UK');
              break;

            case 'size7':
              listSize.push('7 UK');
              break;

            default:
              break;
          }
        }
      })

      const res = {
        id: Date.now(),
        title: result.productname,
        price: result.price,
        image: result.image?result.image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/1bf4aadbff104009b8b5ad41000f7758_9366/Giay_Forum_Low_Donovan_Mitchell_trang_GY8287_01_standard.jpg',
        size: listSize
      }
      this.productService.appendItem(res);
    });


  }


}
