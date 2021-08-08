export class Product{
  productId:number;
  productTitle:string;
  productPrice:number;
  productImage?: string;

  constructor(_id: number, _title: string, _price: number, _image: string){
    this.productId= _id;
    this.productTitle= _title;
    this.productPrice= _price;
    this.productImage= _image;
  }
}
