import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  getCartItems(): Product[] {
    return this.cart;
  }

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(item => item.id !== productId);
  }

  getCartTotal(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }

  clearCart(): void {
    // Add this method if it doesn't exist
    localStorage.removeItem('cart');
    // If you're using a different storage method, adjust accordingly
  }
}
