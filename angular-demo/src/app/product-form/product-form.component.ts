import { ProductService } from './../product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  allSizes = [
    '3.5 UK',
    '4 UK',
    '4.5 UK',
    '5 UK',
    '5.5 UK',
    '6 UK',
    '6.5 UK',
    '7 UK',
    '7.5 UK',
    '8 UK',
    '8.5 UK',
    '9 UK',
    '9.5 UK',
    '10 UK',
    '10.5 UK',
    '11 UK',
    '11.5 UK',
    '12 UK',
    '12.5 UK',
  ];
  imageSrc?: string;
  productForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    price: ['', Validators.required],
    inStock: ['', Validators.required],
    sizes: ['', Validators.required],
    images: [''],
    imagesSource: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId === 'new') return;

    const product = this.productService.getProduct(Number(productId));
    this.updateProduct(product);
  }

  updateProduct(product: any) {
    this.productForm.patchValue({
      id: product.id,
      name: product.name,
      price: product.price,
      inStock: product.inStock,
      sizes: product.sizes,
      imagesSource: product.imagesSource,
    });
    this.imageSrc = product.imagesSource;
  }

  onSubmit() {
    console.log(this.productForm.value);
    this.productService.saveProduct(this.productForm.value);
    this.location.back();
  }

  goBack() {
    this.location.go('/home');
  }

  onSelectSize(check: any, size: any) {
    if (check) {
      const newSizes = [...this.productForm.value.sizes];
      newSizes.push(size);
      this.productForm.patchValue({
        sizes: newSizes,
      });
    } else {
      const newSizes = this.productForm.value.sizes.filter(
        (s: any) => s !== size
      );
      this.productForm.patchValue({
        sizes: newSizes,
      });
    }
  }

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result as string;

        this.productForm.patchValue({
          imagesSource: reader.result,
        });
      };
    }
  }
}
