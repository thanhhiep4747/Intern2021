import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { size } from 'src/data/products';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { BaseComponent } from '../common/base.component';
import {takeUntil} from 'rxjs/operators';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent extends BaseComponent implements OnInit {
  addForm :FormGroup=new FormGroup({
    productname:new FormControl("",[Validators.required]),
    productprice:new FormControl (0,[Validators.required,Validators.min(1)]),
    productimage:new FormControl ("",[Validators.required]),
    productdetail:new FormControl("",[Validators.required])
  })
  list_size:size[]= []
  minsize:number=0
  constructor(private router:Router,private productservice:ProductsService) {super()
     }

  ngOnInit(): void {
    this.productservice.getAllSize()
    .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (res) => {
          // debugger;
          console.log(res)
          for (let i of res.data){
            this.list_size?.push({size:i.nsize,nop:0})
          }
          console.log(this.list_size)
          this.minsize=res.data[0].nsize
        
        },
        (err) => {
          console.log(err);
        }
      );
    // this.list_size=[]
  }
// checkCheckBoxvalue(event:any,size:number){
  // console.log(event.checked)
  // if (event.checked)this.list_size.push(size);
  // else {
  //   this.list_size.forEach((item,index)=>{
  //     if (item==size){
  //       this.list_size.splice(index,1);
  //     }

  //   });
  // }
  // console.log(this.list_size)
// }

submitFormAdd(){
  if (this.addForm.invalid){
    alert(this.addForm.errors);
    return ;
  }
  // if(this.list_size.length===0){
  //   alert("please choose more than 1 size");
  //   return ;
  // }
  
  // // alert(this.addForm.value.productname)
  // this.productservice.addProduct({id:this.productservice.getLenghtProducts(),name:this.addForm.value.productname,
  //   price:this.addForm.value.productprice,
  //   img:this.addForm.value.productimage,size:this.list_size,detail:this.addForm.value.productdetail})
  //   this.router.navigate(['/products'])
  let tmp_lst:size[]=[]
  for (let i=0;i<this.list_size.length;i++){
    if (this.list_size[i].nop!=0){
      tmp_lst.push(this.list_size[i])
    }
  }
let product={name:this.addForm.value.productname,
price:this.addForm.value.productprice,
img:this.addForm.value.productimage,
detail:this.addForm.value.productdetail,size:tmp_lst}
this.productservice.addProduct(product)
.pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (res) => {
          // debugger;
          console.log(res)
          if(res.id){
            this.router.navigate(['/products',res.id])
          }
          else {
            alert("insert product fail")
          }
        
        },
        (err) => {
          console.log(err);
        }
      );
  console.log(this.list_size)
}
checkIndex(size?:number){
  for (let i=0;i<this.list_size.length;i++){
    if(this.list_size[i].size===size){
      return i
    }
  }
  return -1
}
}
