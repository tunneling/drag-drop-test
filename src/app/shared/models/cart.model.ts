import { CartItem } from './cart-item.model';

export class Cart {
    id: string;
    title: string;
    items?: CartItem[];
}
