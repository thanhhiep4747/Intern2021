import { ProductService } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  allSizes: any = [];
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
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSizes();
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId === 'new') return;

    this.productService.getProduct(Number(productId)).subscribe((product) => {
      this.updateProduct(product);
    });
  }

  getSizes() {
    this.productService
      .getSizes()
      .subscribe((sizes) => (this.allSizes = sizes));
  }

  updateProduct(product: any) {
    this.productForm.patchValue({
      id: product.id,
      name: product.name,
      price: product.price,
      inStock: product.in_stock,
      sizes: product.sizes,
      imagesSource: product.images,
    });
    this.imageSrc = product.images;
  }

  onSubmit() {
    console.log(this.productForm.value);
    this.productService.saveProduct(this.productForm.value).subscribe({
      next: (data) => {
        console.log('Saved');
      },
      error: (error) => {
        console.error('There was an error!', error.message);
      },
    });
    this.router.navigate(['/home'])
  }

  isSizeChecked(size: any): boolean {
    const sizes = this.productForm.value.sizes;
    if (sizes) return sizes.filter((s: any) => s.size === size.size).length > 0;
    return false;
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
        (s: any) => s.size !== size.size
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
