import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '../common/base.component';
import { ProductService } from '../product/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent extends BaseComponent implements OnInit {

  id!: number;
  itemDetails: any;
  constructor(private route: ActivatedRoute, private productService: ProductService) {
    super()
  }

  ngOnInit() {



    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.productService.getProduct(this.id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (res) => {

          this.itemDetails = res;
          console.log(this.itemDetails)
        },
        (err) => {
          console.log(err);
        }
      );

    });

  }

  // getProduct(id : number): Observable<any>{

  //   this.itemDetails = this.productService.getDetailsItem(id);
  //   console.log(this.itemDetails)
  // }




}
