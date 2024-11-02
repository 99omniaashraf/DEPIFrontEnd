import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.model';
import { Subscription } from 'rxjs';
import { CheckoutComponent } from '../../pages/checkout/checkout/checkout.component';
import { ProductListingComponent } from '../product-listing/product-listing.component';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CheckoutComponent, ProductListingComponent,],
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
    this.cartService.removeFromCart(productId);
    this.calculateTotal();
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
  }

  checkout(): void {
    this.cartService.checkout();
  }
}

