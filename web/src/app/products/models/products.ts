import { Size } from './sizes';

export class Product {
  proId: number | undefined;
  proName: string | undefined;
  proPrice: number | undefined;
  proImage: string | undefined;
  instock: boolean | undefined;
  sizes: Size[] | undefined;

  constructor(
    proId: number,
    proName: string,
    proPrice: number,
    instock: boolean,
    sizes: Size[],
    proImage?: string
  ) {
    this.proId = proId;
    this.proName = proName;
    this.proPrice = proPrice;
    this.instock = instock;
    this.sizes = sizes;
    this.proImage = proImage;
  }
}
