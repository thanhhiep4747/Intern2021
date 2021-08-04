class product{
    id?:number;
    name?:string;
    price?:number;
    img?:string;
    size?:number[];
    detail?:string;
    constructor(){
        // this.id=-1;
        // this.name="";
        // this.price=0;
        // this.img="";
        // this.size=[];
        // this.detail=""
    }
    //method

}

var products:product[]=[
    {id:0, name:"Giày adidas Ultraboost x LEGO® Colors",price:2000000,
    img:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6a0d6246e26a4852825dad3900baddfd_9366/gi%C3%A0y-adidas-ultraboost-x-lego-colors.jpg",
    size:[33,44],detail:"Chạy bộ chính là lúc để bạn chơi đùa. Với những điểm nhấn sắc màu và các khối LEGO®, đôi giày chạy bộ adidas hợp tác thiết kế cùng \
    LEGO Group này sẽ cùng bạn thỏa sức chơi đùa. Vừa chơi đùa lại vừa thoải mái. Đừng để điều gì ảnh hưởng tới trải nghiệm vui thích của bạn. Đế giữa Boost êm ái nâng \
    niu bàn chân, cùng đế ngoài bằng cao su Continental™ Better Rubber vừa mang đến những sải bước nhanh nhạy vừa đảm bảo khả năng tiếp đất ổn định."
},
    {id:1, name:"Giày adidas Ultraboost x LEGO® Colors",price:2000000,
    img:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6a0d6246e26a4852825dad3900baddfd_9366/gi%C3%A0y-adidas-ultraboost-x-lego-colors.jpg",
    size:[33,44],detail:"Chạy bộ chính là lúc để bạn chơi đùa. Với những điểm nhấn sắc màu và các khối LEGO®, đôi giày chạy bộ adidas hợp tác thiết kế cùng \
    LEGO Group này sẽ cùng bạn thỏa sức chơi đùa. Vừa chơi đùa lại vừa thoải mái. Đừng để điều gì ảnh hưởng tới trải nghiệm vui thích của bạn. Đế giữa Boost êm ái nâng \
    niu bàn chân, cùng đế ngoài bằng cao su Continental™ Better Rubber vừa mang đến những sải bước nhanh nhạy vừa đảm bảo khả năng tiếp đất ổn định."
},
    {id:2, name:"Giày Forum Low",price:1000000,
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1f2a7fdfce904958b50fad22000a088d_9366/gi%C3%A0y-forum-low.jpg",
    size:[33,44],detail:"Chạy bộ chính là lúc để bạn chơi đùa. Với những điểm nhấn sắc màu và các khối LEGO®, đôi giày chạy bộ adidas hợp tác thiết kế cùng \
    LEGO Group này sẽ cùng bạn thỏa sức chơi đùa. Vừa chơi đùa lại vừa thoải mái. Đừng để điều gì ảnh hưởng tới trải nghiệm vui thích của bạn. Đế giữa Boost êm ái nâng \
    niu bàn chân, cùng đế ngoài bằng cao su Continental™ Better Rubber vừa mang đến những sải bước nhanh nhạy vừa đảm bảo khả năng tiếp đất ổn định."
},
    {id:3, name:"Giày Forum Low",price:3500000,
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/985c3fb92ba8432e9433ad220016f0b3_9366/gi%C3%A0y-forum-low.jpg",
    size:[33,44],detail:"Chạy bộ chính là lúc để bạn chơi đùa. Với những điểm nhấn sắc màu và các khối LEGO®, đôi giày chạy bộ adidas hợp tác thiết kế cùng \
    LEGO Group này sẽ cùng bạn thỏa sức chơi đùa. Vừa chơi đùa lại vừa thoải mái. Đừng để điều gì ảnh hưởng tới trải nghiệm vui thích của bạn. Đế giữa Boost êm ái nâng \
    niu bàn chân, cùng đế ngoài bằng cao su Continental™ Better Rubber vừa mang đến những sải bước nhanh nhạy vừa đảm bảo khả năng tiếp đất ổn định."
},
    {id:4, name:"Giày adidas Ultraboost DNA x LEGO®",price:3500000,
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b22f9d0d3fd54d279acbad1d00b4ddc5_9366/gi%C3%A0y-adidas-ultraboost-dna-x-lego-colors.jpg",
    size:[33,44],detail:"Chạy bộ chính là lúc để bạn chơi đùa. Với những điểm nhấn sắc màu và các khối LEGO®, đôi giày chạy bộ adidas hợp tác thiết kế cùng \
    LEGO Group này sẽ cùng bạn thỏa sức chơi đùa. Vừa chơi đùa lại vừa thoải mái. Đừng để điều gì ảnh hưởng tới trải nghiệm vui thích của bạn. Đế giữa Boost êm ái nâng \
    niu bàn chân, cùng đế ngoài bằng cao su Continental™ Better Rubber vừa mang đến những sải bước nhanh nhạy vừa đảm bảo khả năng tiếp đất ổn định."
},
    {id:5, name:"Giày adidas Ultraboost DNA x LEGO® Colors",price:3500000,
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/60712c4ffd24452fbe87acee00dbf61a_9366/gi%C3%A0y-adidas-ultraboost-dna-x-lego-colors.jpg",
    size:[33,44],detail:"Chạy bộ chính là lúc để bạn chơi đùa. Với những điểm nhấn sắc màu và các khối LEGO®, đôi giày chạy bộ adidas hợp tác thiết kế cùng \
    LEGO Group này sẽ cùng bạn thỏa sức chơi đùa. Vừa chơi đùa lại vừa thoải mái. Đừng để điều gì ảnh hưởng tới trải nghiệm vui thích của bạn. Đế giữa Boost êm ái nâng \
    niu bàn chân, cùng đế ngoài bằng cao su Continental™ Better Rubber vừa mang đến những sải bước nhanh nhạy vừa đảm bảo khả năng tiếp đất ổn định."
},
    {id:6, name:"Giày Đá Bóng Sân Cỏ Nhân Tạo Predator Freak.3",price:3500000,
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/0d62d56ed23a4c4e83f6ad0a00b26bfd_9366/gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-x-speedflow.4.jpg",
    size:[33,44],detail:"Chạy bộ chính là lúc để bạn chơi đùa. Với những điểm nhấn sắc màu và các khối LEGO®, đôi giày chạy bộ adidas hợp tác thiết kế cùng \
    LEGO Group này sẽ cùng bạn thỏa sức chơi đùa. Vừa chơi đùa lại vừa thoải mái. Đừng để điều gì ảnh hưởng tới trải nghiệm vui thích của bạn. Đế giữa Boost êm ái nâng \
    niu bàn chân, cùng đế ngoài bằng cao su Continental™ Better Rubber vừa mang đến những sải bước nhanh nhạy vừa đảm bảo khả năng tiếp đất ổn định."
},
    {id:7, name:"Giày Đá Bóng Sân Cỏ Nhân Tạo X Speedflow.4",price:3500000,
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3184eaedff924058b2a4acbf00e3c970_9366/gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-copa-sense.3.jpg",
    size:[33,44],detail:"Chạy bộ chính là lúc để bạn chơi đùa. Với những điểm nhấn sắc màu và các khối LEGO®, đôi giày chạy bộ adidas hợp tác thiết kế cùng \
    LEGO Group này sẽ cùng bạn thỏa sức chơi đùa. Vừa chơi đùa lại vừa thoải mái. Đừng để điều gì ảnh hưởng tới trải nghiệm vui thích của bạn. Đế giữa Boost êm ái nâng \
    niu bàn chân, cùng đế ngoài bằng cao su Continental™ Better Rubber vừa mang đến những sải bước nhanh nhạy vừa đảm bảo khả năng tiếp đất ổn định."
},
    {id:8, name:"Giày Forum Low Donovan Mitchell",price:3500000,
    img:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6a0d6246e26a4852825dad3900baddfd_9366/gi%C3%A0y-adidas-ultraboost-x-lego-colors.jpg",
    size:[33,44],detail:"Chạy bộ chính là lúc để bạn chơi đùa. Với những điểm nhấn sắc màu và các khối LEGO®, đôi giày chạy bộ adidas hợp tác thiết kế cùng \
    LEGO Group này sẽ cùng bạn thỏa sức chơi đùa. Vừa chơi đùa lại vừa thoải mái. Đừng để điều gì ảnh hưởng tới trải nghiệm vui thích của bạn. Đế giữa Boost êm ái nâng \
    niu bàn chân, cùng đế ngoài bằng cao su Continental™ Better Rubber vừa mang đến những sải bước nhanh nhạy vừa đảm bảo khả năng tiếp đất ổn định."
},

]
// class Products{
//     product_list!:product[]
//     constructor(){
//         this.product_list=[
//         {id:1, name:"Gày 1",price:3500000,
//         img:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6a0d6246e26a4852825dad3900baddfd_9366/gi%C3%A0y-adidas-ultraboost-x-lego-colors.jpg",
//         size:[33,44,55,66,77]},
//         {id:2, name:"Gày 1",price:3500000,
//         img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1f2a7fdfce904958b50fad22000a088d_9366/gi%C3%A0y-forum-low.jpg",
//         size:[33,44,55,66,77]},
//         {id:3, name:"Gày 1",price:3500000,
//         img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/985c3fb92ba8432e9433ad220016f0b3_9366/gi%C3%A0y-forum-low.jpg",
//         size:[33,44,55,66,77]},
//         {id:4, name:"Gày 1",price:3500000,
//         img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b22f9d0d3fd54d279acbad1d00b4ddc5_9366/gi%C3%A0y-adidas-ultraboost-dna-x-lego-colors.jpg",
//         size:[33,44,55,66,77]},
//         {id:1, name:"Gày 1",price:3500000,
//         img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/60712c4ffd24452fbe87acee00dbf61a_9366/gi%C3%A0y-adidas-ultraboost-dna-x-lego-colors.jpg",
//         size:[33,44,55,66,77]},
//         {id:2, name:"Gày 1",price:3500000,
//         img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/0d62d56ed23a4c4e83f6ad0a00b26bfd_9366/gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-x-speedflow.4.jpg",
//         size:[33,44,55,66,77]},
//         {id:3, name:"Gày 1",price:3500000,
//         img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3184eaedff924058b2a4acbf00e3c970_9366/gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-copa-sense.3.jpg",
//         size:[33,44,55,66,77]},
//         {id:4, name:"Gày 1",price:3500000,
//         img:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6a0d6246e26a4852825dad3900baddfd_9366/gi%C3%A0y-adidas-ultraboost-x-lego-colors.jpg",
//         size:[33,44,55,66,77]},
    
//     ]}

//     find_product_byID(id:number):product|undefined{
//     for (let product of this.product_list){
//         if (id==product.id){
//             return product
//         }
//     }
//     return undefined

//     }
// }
export{products,product}

