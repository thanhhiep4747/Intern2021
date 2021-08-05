export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public inStock: number,
    public images: string,
    public imagesSource: string,
    public sizes: string[]
  ) {}
}
