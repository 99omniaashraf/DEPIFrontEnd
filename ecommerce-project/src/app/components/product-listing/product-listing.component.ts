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
      imageUrl: '/ecommerce-project/src/assets/img/picture9.jpg'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 200,
      imageUrl: '/ecommerce-project/src/assets/img/picture13.jpg'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 300,
      imageUrl: '/ecommerce-project/src/assets/img/picture12.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product: Product): void {
    console.log(`Product added to cart: ${product.name}`);
  }
}
