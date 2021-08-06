import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { size } from 'src/data/products';
import { Router } from '@angular/router';
import { BaseComponent } from '../common/base.component';
import {takeUntil} from 'rxjs/operators';
// import { ConsoleReporter } from 'jasmine';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent extends BaseComponent implements OnInit {
  FormUpdate :FormGroup=new FormGroup({
    productname:new FormControl("",[Validators.required]),
    productprice:new FormControl (0,[Validators.required,Validators.min(1)]),
    productimage:new FormControl ("",[Validators.required]),
    productdetail:new FormControl("",[Validators.required])
  })
  list_size:size[]=[]
  pid:number=0;
  sizemin:number=0
  constructor(private route:ActivatedRoute,
    private router: Router,private productservice:ProductsService) {
super()
   }

  ngOnInit(): void {
    const routerParam=this.route.snapshot.paramMap;
    const productId=Number(routerParam.get('Id'))
    this.pid=productId
    console.log(productId);
    this.productservice.getDetailProduct(productId)
    .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (res) => {
          // debugger;
          console.log(res);
          this.FormUpdate.setValue({productname:res.data[0].pname,
          productprice:res.data[0].pprice,
          productimage:res.data[0].img,
          productdetail:res.data[0].detail})
          // if(res.data[0].size==null){
          //   this.list_size=[]
          // }else {
          //   let lstsize=[]
          //   for (let i of res.data){
          //     lstsize.push({size:i.size,nop:i.number})
          //   }
          //   this.product.size=lstsize
          //   console.log(this.product)
          // }
          this.productservice.getAllSize()
          .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (ressize) => {
          this.sizemin=ressize.data[0].nsize
for (let i of ressize.data){
  let check=0
  for (let j of res.data){
    if (i.nsize===j.size){
      this.list_size.push({size:i.nsize,nop:j.number})
      check=1
      break
    }
  }
  if(!check){
    this.list_size.push({size:i.nsize,nop:0})
  }
}
console.log(this.list_size)
        },(errsize)=>{console.log(errsize)})
      },(err) => {
          console.log(err);
        })
  }
  checkCheckBoxvalue(event:any,size:number){
    // console.log(event.checked)
    // if (event.checked)this.list_size?.push(size);
    // else {
    //   this.list_size?.forEach((item,index)=>{
    //     if (item==size){
    //       this.list_size?.splice(index,1);
    //     }
  
    //   });
    // }
    // console.log(this.list_size)
  }
submitFormUpdate(){
let tmp=[]
for (let i of this.list_size){
  if(i.nop!=0)tmp.push(i)
}
let product={
  name:this.FormUpdate.value.productname,
    price:this.FormUpdate.value.productprice,
    img:this.FormUpdate.value.productimage,
    detail:this.FormUpdate.value.productdetail,size:tmp}
this.productservice.updateProduct(this.pid,product)
.pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (res) => {
          if (res.status){
            this.router.navigate(['/products',this.pid])
          }
          else {
            alert(res.message)
          }
        },(err)=>{})

  }

  checkIndex(size:number){
    for (let i=0;i<this.list_size.length;i++){
      if(this.list_size[i].size===size){
        return i
      }
    }
    return -1
  }


}
