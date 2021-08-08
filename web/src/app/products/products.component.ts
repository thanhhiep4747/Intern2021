import { Router } from '@angular/router';
import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ProductsService } from './products.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from './models/products';

const X_lg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
</svg>
  `;

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnChanges {
  @Output() products: Product[] | undefined;
  constructor(
    private productService: ProductsService,
    private router: Router,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconLiteral(
      'remove-icon',
      sanitizer.bypassSecurityTrustHtml(X_lg)
    );
  }

  ngOnInit(): void {
    this.productService.getAllProductInstock().subscribe((res) => {
      this.products = res.filter((product: any) => product.instock === true);
    });
  }

  ngOnChanges() {}

  removeProductById(proId: any) {
    this.productService.removeProductById(proId).subscribe((res) => {
      if (res === 1) {
        if (this.products !== undefined)
          this.products = this.products.filter(
            (product) => product.proId !== proId
          );
      }
    });
  }

  goToAddProducts() {
    this.router.navigateByUrl('/products/add');
  }
}
