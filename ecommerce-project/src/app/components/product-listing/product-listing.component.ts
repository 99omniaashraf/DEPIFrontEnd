import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for ngFor and other common directives
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
  standalone: true,
  imports: [CommonModule, ProductDetailComponent]
})
export class ProductListingComponent implements OnInit {


  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 100,
      imageUrl: '/assets/images/picture1.jpg',
      inStock: true
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 200,
      imageUrl: '/assets/images/picture2.jpg',
      inStock: true
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 300,
      imageUrl: '/assets/images/picture6.jpg',
      inStock: false
    },
    {
      id: 1,
      name: 'Product 4',
      description: 'Description for Product 4',
      price: 100,
      imageUrl: '/assets/images/picture25.jpg',
      inStock: true
    },
    {
      id: 2,
      name: 'Product 5',
      description: 'Description for Product 5',
      price: 200,
      imageUrl: '/assets/images/picture26.jpg',
      inStock: true
    },
    {
      id: 3,
      name: 'Product 6',
      description: 'Description for Product 6',
      price: 300,
      imageUrl: '/assets/images/picture27.jpg',
      inStock: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product: Product): void {
    console.log(`Product added to cart: ${product.name}`);
  }

}
