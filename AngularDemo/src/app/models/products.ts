export class Product {
    id: number = 0;
    type: number = 0;
    name: string = '';
    img: string = 'http://aquaphor.vn/wp-content/uploads/2016/06/default-placeholder.png';
    liked: boolean = false;

    constructor(_id: number, _type: number, _name: string, _img: string, _liked: boolean) {
        this.id = _id;
        this.type = _type;
        this.name = _name;
        this.img = _img;
        this.liked = _liked;
    }
}