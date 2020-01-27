import { Cart } from './../../../shared/models/cart.model';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
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
    private productService: ProductService,
  ) {
  }

  ngOnInit() {
    this.productService.getProducts()
    .then(products => this.products = products);
    this.cartService.getCart()
    .then(cart => this.cart = cart);
  }

  // createCartItem(product: any): any[] {
  //   console.log(product);
  //   return { qty: 0, hours: product.dhours, product };
  // }

  drop(event: CdkDragDrop<string[]>) {
    console.log('Previous: ');
    console.log(event.previousContainer.data);
    console.log('Current: ');
    console.log(event.container.data);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // const data: string[] = this.createCartItem(event.container.data);
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    // console.log(this.cart);
  }
}
