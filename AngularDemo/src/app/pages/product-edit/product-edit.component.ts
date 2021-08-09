import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models';
import { productDB } from '../../fake-db';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  data: Product = productDB.findById(Number(this._route.snapshot.paramMap.get("id")));
  name: string = this.data.name;
  imgSrc: string = this.data.img;
  description: string = this.data.description;
  type: number = this.data.type;

  constructor(private _route: ActivatedRoute, private router: Router, private service: ProductService) { }

  ngOnInit(): void {
  }

  updateItem(): void {
    this.service.updateItem(this.data.id, this.name, this.type, this.imgSrc, this.description).subscribe(res => {
      console.log("Response: ", res);
      alert("Product updated");
      this.router.navigate(['/products']);
    })
  }

  removeItem(): void {
    this.service.removeItem(this.data.id).subscribe(res => {
      console.log("Response: ", res);
      alert("Product removed");
      this.router.navigate(['/products']);
    })
  }

}
