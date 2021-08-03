export class Product {
  id: number;
  name: string;
  price: number;
  inStock: number;
  images: string;
  imagesSource: string;
  sizes: string[];

  constructor(
    _id: number,
    _name: string,
    _price: number,
    _inStock: number,
    _images: string,
    _imagesSource: string,
    _sizes: string[]
  ) {
    this.id = _id;
    this.name = _name;
    this.price = _price;
    this.inStock = _inStock;
    this.images = _images;
    this.imagesSource = _imagesSource;
    this.sizes = _sizes;
  }
}
