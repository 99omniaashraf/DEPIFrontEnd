// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.interface';
import { Cart } from '../models/cart.model';
=======
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
>>>>>>> 4c80c3c (checkout)

@Injectable({
  providedIn: 'root'
})
export class CartService {
<<<<<<< HEAD
  private cartSubject = new BehaviorSubject<Cart[]>([]);
  cart$ = this.cartSubject.asObservable();
=======
  private cart: Product[] = [];
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }
>>>>>>> 4c80c3c (checkout)

  constructor() {
      // Load cart from localStorage on service initialization
      this.loadCart();
  }

  private loadCart(): void {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
          this.cartSubject.next(JSON.parse(savedCart));
      }
  }

  private saveCart(cart: Cart[]): void {
      localStorage.setItem('cart', JSON.stringify(cart));
      this.cartSubject.next(cart);
  }

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
          this.saveCart([...currentCart, cartItem]);
      }
  }

  removeFromCart(productId: number): void {
      const currentCart = this.cartSubject.value;
      const updatedCart = currentCart.filter(item => item.id !== productId);
      this.saveCart(updatedCart);
  }

  updateQuantity(productId: number, newQuantity: number): void {
      const currentCart = this.cartSubject.value;
      const updatedCart = currentCart.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      this.saveCart(updatedCart);
  }

  clearCart(): void {
      localStorage.removeItem('cart');
      this.cartSubject.next([]);
  }

<<<<<<< HEAD
  getCart(): Cart[] {
      return this.cartSubject.value;
  }

  getCartTotal(): number {
      return this.cartSubject.value.reduce(
          (total, item) => total + (item.price * item.quantity),
          0
      );
  }
=======
  checkout(): void {
    this.router.navigate(['/checkout']);
  }

>>>>>>> 4c80c3c (checkout)
}
