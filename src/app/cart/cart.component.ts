import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  listaItema;
  checkoutForm;
  constructor(
    private cartService : CartService,
    private formBuilder: FormBuilder,
  ) { 
    this.listaItema = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData + this.listaItema);

    this.listaItema = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {
    
  }

}
