import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface PotteryTool {
  url: string;
  alt: string;
}

interface ContactModel {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule  // Add FormsModule for form functionality
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Products data
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

  // Pottery tools data
  potteryTools: PotteryTool[] = [
    { url: '/assets/images/picture4.jpg', alt: 'Pottery Wheel' },
    { url: '/assets/images/picture14.jpg', alt: 'Clay Tools Set' },
    { url: '/assets/images/picture20.jpg', alt: 'Glazing Kit' },
    { url: '/assets/images/picture16.jpg', alt: 'Kiln' }
  ];

  // Contact form model
  model: ContactModel = {
    name: '',
    email: '',
    message: ''
  };

  // Cart functionality
  addToCart(product: Product): void {
    console.log(`Adding ${product.name} to cart`);
    // Implement cart functionality here
  }

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted!', this.model);
      form.reset();
    }
  }
}
