import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AddProductFormComponent } from '../add-product-form/add-product-form.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ProductService } from '../service/product-service.service';
import { Product } from './Iproduct';
import { PRODUCTS } from './mock-data';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  listProducts: Product[] = [];
  editFormCheck: boolean = false
  constructor(private dialog: MatDialog, private productService: ProductService) {}

  ngOnInit() {
    this.getAllProduct()
  }
  changeForm() {
    this.editFormCheck = !this.editFormCheck
  }
  getAllProduct(): void {
    this.productService.getAllProducts()
    .subscribe(products => this.listProducts = products);

  }

  openConfirmDialog(id: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => {if(data) {
          this.productService.removeProduct(id)
          .subscribe(products => this.listProducts = products);
    }}
    ); 
  }

  addProductForm(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AddProductFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {if(data) {
        const sizeList = data['selectedSizes'].map(Number)
        const newProduct: Product=
        {id: this.productService.getLastedId(), name: data['name'],imgUrl: data['imgUrl'],price: data['price'], size: sizeList }
        this.productService.addProduct(newProduct)
        .subscribe(products => this.listProducts = products);
      }}
    );
  }

  
  editProductForm(product: Product){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = product;
    const dialogRef = this.dialog.open(AddProductFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {if(data) {
        const sizeList = data['selectedSizes'].map(Number)
        const newProduct: Product=
        {id: data['id'], name: data['name'],imgUrl: data['imgUrl'],price: data['price'], size: sizeList }
        
        this.productService.removeProduct(newProduct.id)
        .subscribe(products =>this.listProducts = products);
        
        this.productService.addProduct(newProduct)
        .subscribe(products => this.listProducts = products);

        this.listProducts.sort(function (a, b) {
          return a.id - b.id
        });
      }}
    );
  }

  
}
