import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  name: string = '';
  imgSrc: string = '';
  description: string = '';
  type: number = 0;

  constructor(private service: ProductService) { }

  ngOnInit(): void {
  }

  addItem(): void {
    this.service.addItem(this.name, this.type, this.imgSrc, this.description).subscribe(res => {
      console.log("Response: ", res);
    })
    console.log("Type: ", this.type);
    alert("New product added")
  }

}
