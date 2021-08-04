export class Product {
  proId: number;
  name: string;
  price: number;
  instock: boolean;
  size: number[];
  image: string;
  constructor(
    proId: string,
    name: string,
    price: string,
    instock: string,
    size: number[],
    image: string
  ) {
    this.proId = +proId;
    this.name = name;
    this.price = +price;
    this.instock = !!instock;
    this.size = size;
    this.image = image;
  }
}
