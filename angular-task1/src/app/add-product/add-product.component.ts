import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productService: ProductService;
  router: Router;

  constructor(productService: ProductService, router: Router) {
    this.productService = productService;
    this.router = router;
   }

  ngOnInit(): void {
  }

  categories: Category[] = [
    {value: "nam-chay", viewValue: "Nam Chạy"},
    {value: "originals", viewValue: "Originals"},
    {value: "nam-originals", viewValue: "Nam Originals"},
    {value: "colors", viewValue: "Colors"},
    {value: "golf", viewValue: "Đánh gôn"}];
  sizes: Size[] = [
    {id: 1, value: "3.5 UK"},
    {id: 2, value: "4 UK"},
    {id: 3, value: "4.5 UK"},
    {id: 4, value: "5 UK"},
    {id: 5, value: "5.5 UK"},
    {id: 6, value: "6 UK"},
    {id: 7, value: "6.5 UK"},
    {id: 8, value: "7 UK"}
  ]
  addProductForm = new FormGroup({
    name: new FormControl("", Validators.required),
    price: new FormControl(0, Validators.required),
    quantity: new FormControl(1, Validators.required),
    imageUrl: new FormControl(""),
    sizes: new FormControl(Array(this.sizes.length).fill(0)),
    category: new FormControl(this.categories[0].viewValue)
  });

  addSize(values: MatCheckboxChange, id: number){
    if (values.checked)
      this.addProductForm.controls["sizes"].value[id-1] = 1;
    else
      this.addProductForm.controls["sizes"].value[id-1] = 0;
  }

  onSubmit(){
    let totalSizeTypes = this.addProductForm.controls["sizes"].value.reduce((a: number, b: number) => a + b);
    if (this.addProductForm.valid && totalSizeTypes > 0) {
      console.log(this.addProductForm.value);
      const formInput = this.addProductForm.value;

      const selectedSizes = this.mapSelectedSize(formInput.sizes);
      
      //console.log(formInput.sizes);
      this.productService.addProduct(new Product(
        Date.now(),
        formInput.quantity,
        selectedSizes,
        formInput.imageUrl,
        formInput.price,
        formInput.name,
        formInput.category
      ));

      this.back();

    }
  }
  mapSelectedSize(arr: number[]){
    let selectedSizes: string[] = [];
    for (let i in arr){
      if (arr[i] == 1)
        selectedSizes.push(this.sizes[parseInt(i)].value);
    }
    return selectedSizes;
  }
  back(){
    this.router.navigateByUrl("products");
  }
}
interface Category {
  value: string;
  viewValue: string;
}
interface Size {
  id: number;
  value: string;
}