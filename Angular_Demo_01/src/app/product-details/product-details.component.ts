import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/data/products';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";
// import { MatIconRegistry } from '@angular/material';
import { ProductsService } from '../products.service';
import { BaseComponent } from '../common/base.component';
import {takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent extends BaseComponent implements OnInit {
  product:product=new product()
  pid?:number
  constructor(private route:ActivatedRoute,
    private router: Router,
    private matIconRegistry:MatIconRegistry,private domSanitizer:DomSanitizer,
    private productservice:ProductsService) {
      super()
      this.matIconRegistry.addSvgIcon("note",this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/svg/note.svg"));
      this.matIconRegistry.addSvgIcon("car",this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/svg/station-wagon.svg"));
      
     }

  ngOnInit(): void {
    const routerParam=this.route.snapshot.paramMap;
    const productId=Number(routerParam.get('productId'))
    this.pid=productId
    console.log(productId);
    this.productservice.getDetailProduct(productId)
    .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (res) => {
          // debugger;
          console.log(res)
          // {"data":[{"pid":1,"pname":"ahihi","pprice":2000000,"img":"mmmmmmm","detail":null,"size":null,"number":null}]}
          this.product.name=res.data[0].pname;
          this.product.price=res.data[0].pprice
          this.product.img=res.data[0].img
          this.product.detail=res.data[0].detail
          if(res.data[0].size==null){
            this.product.size=[]
          }else {
            let lstsize=[]
            for (let i of res.data){
              lstsize.push({size:i.size,nop:i.number})
            }
            this.product.size=lstsize
            console.log(this.product)
          }
        },
        (err) => {
          console.log(err);
        }
      );
    console.log(this.product);
  
    
//     if (tmp_product===undefined){
// this.router.navigate(['/products'])
//     }else
//     this.product=tmp_product
  }
  onDelete(){
    
    if (confirm("you definitely want to delete this product ")){
      console.log(this.pid)
      if (this.pid){
        this.productservice.removeProduct(this.pid)
        .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (res) => {
          // debugger;
          console.log(res);
          this.router.navigate(['/products'])
        },(err) => {
          console.log(err);
        })
      
      
      }
    }
    }
  onUpdate(){
      this.router.navigate(['/update-product',this.pid]);
  }
}


