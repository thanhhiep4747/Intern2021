export interface Product {
    id: number;
    quantity: number;
    sizes: string[];
    imageUrl: string;
    price: number;
    name: string;
    category: string;
}
export class Product {
    constructor(id: number, quantity: number, sizes: string[],imageUrl: string, price: number ,desription: string, category: string){
        this.id = id;
        this.quantity = quantity;
        this.sizes = sizes;
        this.imageUrl = imageUrl;
        this.price = price;
        this.name = desription;
        this.category = category;
    }
}