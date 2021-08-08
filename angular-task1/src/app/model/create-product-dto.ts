import { ProductSize } from "./product-size";
export class CreateProductDto {
    name: string;
    price: number;
    category: number;
    imageUrl: string;
    sizes: ProductSize[];
    constructor(name: string, price: number, category: number, imageUrl: string, sizes: ProductSize[]){
        this.name = name;
        this.price = price;
        this.category = category;
        this.imageUrl = imageUrl;
        this.sizes = sizes;
    }
}
