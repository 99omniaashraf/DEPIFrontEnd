// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<Cart[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product): void {
    const currentCart = this.cartSubject.value;
    const existingItem = currentCart.find(item => item.id === product.id);

    if (existingItem) {
      this.updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      const cartItem: Cart = {
        ...product,
        quantity: 1
      };
      this.cartSubject.next([...currentCart, cartItem]);
    }
  }

  removeFromCart(productId: number): void {
    const currentCart = this.cartSubject.value;
    const updatedCart = currentCart.filter(item => item.id !== productId);
    this.cartSubject.next(updatedCart);
  }

  updateQuantity(productId: number, newQuantity: number): void {
    const currentCart = this.cartSubject.value;
    const updatedCart = currentCart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    this.cartSubject.next(updatedCart);
  }

  clearCart(): void {
    this.cartSubject.next([]);
  }

  getCart(): Cart[] {
    return this.cartSubject.value;
  }

  getCartTotal(): number {
    return this.cartSubject.value.reduce(
      (total, item) => total + (item.price * item.quantity),
      0
    );
  }
}
