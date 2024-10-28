import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.interface';
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
    // الاشتراك في التغيرات على سلة التسوق
    this.cartSubscription = this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  ngOnDestroy(): void {
    // إلغاء الاشتراك عند تدمير المكون
    this.cartSubscription?.unsubscribe();
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    // بعد إزالة المنتج من السلة، يجب إعادة حساب الإجمالي
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
    // حساب المجموع الكلي للعناصر في السلة
    this.cartTotal = this.cartItems.reduce(
      (total, item) => total + (item.price * item.quantity),
      0
    );
  }

  get hasItems(): boolean {
    // التحقق مما إذا كانت السلة تحتوي على عناصر
    return this.cartItems.length > 0;
  }
}
