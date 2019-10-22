import { Phone } from './Phone';

export interface MyInterface {
    getItems():Phone[];
    clearCart(): void;
    addToCart(product: Phone): void;
    getShippingPrices();
    items : Phone[];
}
