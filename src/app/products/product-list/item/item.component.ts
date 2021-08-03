import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HeartService } from 'src/app/services/heart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() productItem: Product
  addedToWishlist: boolean = false;

  constructor(private wishlistService: HeartService) {
  }

  ngOnInit(): void {
  }

  handleAddToWishlist() {
    this.wishlistService.addToWishlist(this.productItem.id);
    this.addedToWishlist = true;
  }

  handleRemoveFromWishlist() {
    this.wishlistService.removeFromWishlist(this.productItem.id);
    this.addedToWishlist = false;
  }

}
