import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProduct } from '../product/dataProduct';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  id!: number;
  itemDetails: any;
  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {



    this.route.params.subscribe(params => {
       this.id = Number(params['id']);
       this.getDetailsItem(this.id);

    });

  }

  getDetailsItem(id : number): void{

    this.itemDetails = this.productService.getDetailsItem(id);
    console.log(this.itemDetails)
  }




}
