import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }
  product: Product = new Product(0,
    0,
    [],
    "https://ctagency.vn/wp-content/uploads/2020/05/404.png",
    0,
    "",
    ""
  );
  updateProductForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let productId = this.route.snapshot.paramMap.get('id');
      if (productId === null){
        productId = "0";
      }
      console.log(productId);
      this.product = this.productService.getProduct(parseInt(productId));
      this.updateProductForm = new FormGroup({
        name: new FormControl(this.product.name, Validators.required),
        price: new FormControl(this.product.price, Validators.required),
        quantity: new FormControl(this.product.quantity, Validators.required),
        imageUrl: new FormControl(this.product.imageUrl),
        sizes: new FormControl(Array(this.sizes.length).fill(0)),
        category: new FormControl(this.product.category)
      });
    });
  }
  fillCurrentData(){
    //this.addProductForm.controls["name"].value = this.product.name;
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
  

  addSize(values: MatCheckboxChange, id: number){
    if (values.checked)
      this.updateProductForm.controls["sizes"].value[id-1] = 1;
    else
      this.updateProductForm.controls["sizes"].value[id-1] = 0;
  }

  onSubmit(){
    let totalSizeTypes = this.updateProductForm.controls["sizes"].value.reduce((a: number, b: number) => a + b);
    if (this.updateProductForm.valid && totalSizeTypes > 0) {
      console.log(this.updateProductForm.value);
      const formInput = this.updateProductForm.value;

      const selectedSizes = this.mapSelectedSize(formInput.sizes);
      
      //console.log(formInput.sizes);
      this.productService.updateProduct(this.product.id, new Product(
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
