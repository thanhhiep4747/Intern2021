import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  list: any = this.service.getProduct();
  type: number = 0;

  constructor(private service: ProductService) { }

  res: any;
  ngOnInit(): void {
    this.service.getData().subscribe(res => {
      this.res = res;
      console.log("Response: ", this.res);
      this.list = this.service.getProduct();
      console.log("List: ", this.service.getProduct());
    })
  }

  onChangeType (value: number) : void {
    this.type = value;
  }

  updateLike(item: Product): void {
    this.service.updateLike(item);
  }
}
