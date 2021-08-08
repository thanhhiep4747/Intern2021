import { Component, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Size } from '../models/sizes';
import { ProductsService } from '../products.service';

function requiredFileTypes(types: string[]) {
  return function (control: FormControl) {
    let file = control.value;
    console.log(file);
    if (file)
      for (let type of types) {
        console.log(type);
        let re = new RegExp(`\\.${type}$`, 'g');
        if (file.match(re)) {
          return null;
        }
      }
    return {
      requiredFileType: true,
    };
  };
}

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  allSizes: Size[] = [];
  imageSelected: string | ArrayBuffer | null = null;

  insertProductForm: FormGroup;
  nameControl = new FormControl('', [
    Validators.minLength(5),
    Validators.required,
  ]);
  priceControl = new FormControl(0, [
    Validators.pattern(/^[0-9]+$/),
    Validators.required,
  ]);
  instockControl = new FormControl('true');
  imageControl = new FormControl(null, [
    Validators.required,
    requiredFileTypes(['png', 'jpg', 'jpeg']),
  ]);
  sizeControls: FormControl[] = [];

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) {
    this.productService.getAllSizes().subscribe((res) => {
      this.allSizes = res;
      for (let i = 0; i < this.allSizes.length; i++) {
        this.sizeControls.push(new FormControl(false));
      }
    });
    this.insertProductForm = this.fb.group({
      nameControl: this.nameControl,
      priceControl: this.priceControl,
      instockControl: this.instockControl,
      sizeControls: this.sizeControls,
      imageControl: this.imageControl,
    });
  }

  ngOnInit(): void {}

  submitFormInsertProduct() {
    let product = {
      proName: this.nameControl.value,
      proPrice: +this.priceControl.value,
      instock: !!this.instockControl.value,
      proImage: this.imageSelected,
      sizeIds: this.filterSizeIds(),
    };
    this.productService.insertProduct(product).subscribe((res) => {
      if (res) {
        this.router.navigateByUrl('/products');
      } else {
        alert('Create new Products FAIL !!!');
      }
    });
  }

  filterSizeIds() {
    let sizesSelect = this.allSizes.filter(
      (_, index) => this.sizeControls[index].value === true
    );
    return sizesSelect.map((value) => value.sizeId);
  }

  goToProducts() {
    this.router.navigateByUrl('/products');
  }

  onImageSelected(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageSelected = reader.result;
    };
  }
}
