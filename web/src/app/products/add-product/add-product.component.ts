import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  valueOfSizes;

  insertProductForm: FormGroup;
  name = new FormControl('');
  price = new FormControl(0);
  instock = new FormControl('true');
  sizes: FormControl[] = [];
  sizes1 = [
    new FormControl(false),
    new FormControl(false),
    new FormControl(false),
    new FormControl(false),

    new FormControl(false),
    new FormControl(false),
    new FormControl(false),
    new FormControl(false),

    new FormControl(false),
    new FormControl(false),
    new FormControl(false),
    new FormControl(false),

    new FormControl(false),
    new FormControl(false),
    new FormControl(false),
    new FormControl(false),

    new FormControl(false),
    new FormControl(false),
    new FormControl(false),
  ];
  product: any;
  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) {
    this.valueOfSizes = this.productService.getAllSizes();
    for (let i = 0; i < this.valueOfSizes.length; i++) {
      this.sizes.push(new FormControl(false));
    }

    console.log(this.sizes);

    // tai sao cach sinh array nhu nay k chay duoc ?
    // this.sizes = new Array(this.valueOfSizes.length).fill(
    //   new FormControl(false)
    // );
    // console.log(this.sizes);

    this.insertProductForm = this.fb.group({
      name: this.name,
      price: this.price,
      instock: this.instock,
      sizes: this.sizes,
      sizes1: this.sizes1,
    });
  }

  ngOnInit(): void {}

  // setValueOfSizes(index: number, isChecked: boolean, event?: any) {
  //   this.sizes[index].setValue(isChecked);
  //   console.log(event);
  // }

  submitFormInsertProduct() {
    let product = {
      proId: -1,
      name: this.name.value,
      price: +this.price.value,
      instock: !!this.instock.value,
      sizes: this.filterSizes(),
      image: `https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/58a87be838b8404796c9ad3900bb2ebb_9366/giày-adidas-ultraboost-x-lego-colors.jpg`,
    };
    this.productService.insertProduct(product);
  }

  filterSizes() {
    return this.valueOfSizes.filter((value, index) => {
      return this.sizes[index].value === true;
    });
  }

  goToProducts() {
    this.router.navigateByUrl('/products');
  }
}
