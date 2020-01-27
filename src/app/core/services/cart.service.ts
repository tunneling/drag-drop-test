import { Injectable } from '@angular/core';
import { CART } from '../mocks/mock-cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getCart() {
    return Promise.resolve(CART);
  }
}
