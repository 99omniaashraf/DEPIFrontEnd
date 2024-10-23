import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Product {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [
    {
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 99.99,
      imageUrl: '/assets/images/picture1.jpg'
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 149.99,
      imageUrl: '/assets/images/picture2.jpg'
    },
    {
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 199.99,
      imageUrl: '/assets/images/picture6.jpg'
    }
  ];

  addToCart(product: Product): void {
    console.log(`Adding ${product.name} to cart`);
    // Implement cart functionality here
  }
}
