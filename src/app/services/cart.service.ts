import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Cart } from '../classes/cart';
import { Observable, BehaviorSubject } from 'rxjs';
import { Plant } from '../classes/plants';
import { CartItem } from '../classes/cart-item';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart;
  private cartSubject: BehaviorSubject<Cart>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.cart = this.getCartFromLocalStorage();
    this.cartSubject = new BehaviorSubject(this.cart);
  }

  addToCart(plant: Plant): void {
    let cartItem = this.cart.items.find(item => item.plant.id === plant.id);
    if (cartItem) return;

    this.cart.items.push(new CartItem(plant));
    this.setCartToLocalStorage();
  }

  removeFromCart(plantId: string): void {
    const plantIdNumber = Number(plantId);
    this.cart.items = this.cart.items.filter(item => item.plant.id !== plantIdNumber);
    this.setCartToLocalStorage();
  }

  changeQuantity(plantId: string, quantity: number): void {
    const plantIdNumber = Number(plantId);
    let cartItem = this.cart.items.find(item => item.plant.id === plantIdNumber);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.plant.price;
    this.setCartToLocalStorage();
  }

  clearCart(): void {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0); // Sum of Price (Default Value = 0)
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0); // Sum of quantity
    if (isPlatformBrowser(this.platformId)) {
      const cartJson = JSON.stringify(this.cart);
      localStorage.setItem("Cart", cartJson);
    }
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    if (isPlatformBrowser(this.platformId)) {
      const cartJson = localStorage.getItem("Cart");
      return cartJson ? JSON.parse(cartJson) : new Cart(); // If no cart in local Storage return new
    }
    return new Cart();
  }
}
