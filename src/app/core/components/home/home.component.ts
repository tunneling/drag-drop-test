import { Cart } from './../../../shared/models/cart.model';
import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CartItem } from 'src/app/shared/models/cart-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];
  cart: Cart;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.productService
      .getProducts()
      .then(products => (this.products = products));
    this.cartService.getCart().then(cart => (this.cart = cart));
  }

  drop(dropListName: string, event: CdkDragDrop<string[]>) {
    console.log(event.container.element.nativeElement.nodeName);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      if (dropListName === 'cartList') {
        const cartItem: CartItem[] = [
          {
            qty: 1,
            hours: 0,
            product: event.previousContainer.data[event.previousIndex] as unknown as Product
          }
        ];
        transferArrayItem<CartItem>(
          cartItem,
          event.container.data as unknown as CartItem[],
          event.previousIndex,
          event.currentIndex
        );
        event.previousContainer.data.splice(event.previousIndex, 1);
      } else {
        const product: Product[] = [{
            id: (event.previousContainer.data[event.previousIndex] as unknown as CartItem).product.id,
            title: (event.previousContainer.data[event.previousIndex] as unknown as CartItem).product.title,
            dhours: (event.previousContainer.data[event.previousIndex] as unknown as CartItem).product.dhours
        }];
        transferArrayItem<Product>(
          product,
          event.container.data as unknown as Product[],
          event.previousIndex,
          event.currentIndex
        );
        event.previousContainer.data.splice(event.previousIndex, 1);
      }
    }
  }
}
