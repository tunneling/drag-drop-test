import { Cart } from './../../shared/models/cart.model';

export const CART: Cart = {
    id: 'abc123',
    title: 'Cart 1',
    items: [
        {
            qty: 2,
            hours: 29,
            product: { id: '10', title: 'product 10', dhours: 10 }
        },
        {
            qty: 0,
            hours: 40,
            product: { id: '11', title: 'product 11', dhours: 10 }
        },
    ]
};
