import { Component } from '@angular/core';
import { ShopheaderComponent } from '../shopheader/shopheader.component';
import { Cart } from '../classes/cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../classes/cart-item';
import { ShoppingCartTitleComponent } from '../shopping-cart-title/shopping-cart-title.component';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [ShopheaderComponent, ShoppingCartTitleComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  cart!: Cart;
  constructor(private cartService: CartService)
  {
   this.cartService.getCartObservable().subscribe((cart) => this.cart = cart);
  }

  removeFromCart(cartItem: CartItem) 
  {
    this.cartService.removeFromCart(cartItem.plant.id.toString());
  }

  changeQuantity(cartItem: CartItem, quantityInString:string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.plant.id.toString(), quantity);
  }
   
}