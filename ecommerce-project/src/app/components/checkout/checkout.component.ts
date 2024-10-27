import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class CheckoutComponent implements OnInit {
  cartItems: Product[] = [];
  cartTotal: number = 0;
  checkoutForm!: FormGroup;





  constructor(private cartService: CartService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.cartTotal = this.cartService.getCartTotal();
    this.checkoutForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      paymentMethod: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      const orderData = {
        items: this.cartItems,
        total: this.cartTotal,
        shippingInfo: this.checkoutForm.value
      };

      console.log('Order placed:', orderData);

      // Clear cart and reset form after successful order
      this.cartService.clearCart();
      this.checkoutForm.reset();
      this.cartItems = [];
      this.cartTotal = 0;

      alert('Order placed successfully!');
    }
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
  }
}