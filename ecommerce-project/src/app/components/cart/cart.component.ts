import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { Cart } from '../../models/cart.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: Cart[] = [];
  cartTotal: number = 0;
  private cartSubscription?: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription?.unsubscribe();
  }

  removeFromCart(productId: number): void {
<<<<<<< HEAD
    this.cartService.removeFromCart(productId);
  }

  updateQuantity(productId: number, newQuantity: number): void {
    if (newQuantity <= 0) {
      this.removeFromCart(productId);
    } else {
      this.cartService.updateQuantity(productId, newQuantity);
    }
  }

  private calculateTotal(): void {
    this.cartTotal = this.cartItems.reduce(
      (total, item) => total + (item.price * item.quantity),
      0
    );
  }

  get hasItems(): boolean {
    return this.cartItems.length > 0;
=======
    const itemIndex = this.cartItems.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);
      this.cartTotal = this.cartItems.reduce((total, item) => total + item.price, 0);
    }

>>>>>>> 6883f36f1f0d42136267807d2e8b559d1bcbd3b2
  }


}
