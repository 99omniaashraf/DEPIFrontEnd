import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for ngFor and other common directives
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
  standalone: true,  // Make the component standalone
  imports: [CommonModule]  // Import CommonModule for use in the template
})
export class ProductListingComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 100,
      imageUrl: '/assets/images/picture1.jpg'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 200,
      imageUrl: '/assets/images/picture2.jpg'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 300,
      imageUrl: '/assets/images/picture6.jpg'
    }
  ];

  socialLinks = [  // إضافة خاصية socialLinks
    { href: 'https://www.facebook.com', label: 'Facebook', icon: 'fab fa-facebook', title: 'Facebook' },
    { href: 'https://www.twitter.com', label: 'Twitter', icon: 'fab fa-twitter', title: 'Twitter' },
    { href: 'https://www.instagram.com', label: 'Instagram', icon: 'fab fa-instagram', title: 'Instagram' },
    // أضف المزيد من الروابط حسب الحاجة
  ];

  currentYear: number = new Date().getFullYear();  // لعرض السنة الحالية في الـ footer

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product: Product): void {
    console.log(`Product added to cart: ${product.name}`);
  }
}
