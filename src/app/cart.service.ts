import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyInterface } from './my-interface';
import { Phone } from './Phone';

@Injectable({
  providedIn: 'root'
})
export class CartService implements MyInterface {
  items: Phone[];
  constructor(
    private http: HttpClient
  ) {
    this.items = [];
  }

  addToCart(product: Phone) {
    console.log(product);

    this.items.push(product);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  getItems(): Phone[] {
    // return this.items;
   

    return JSON.parse(localStorage.getItem('cart'));
  }


  clearCart() {
    localStorage.removeItem('cart');
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');

  }
}
