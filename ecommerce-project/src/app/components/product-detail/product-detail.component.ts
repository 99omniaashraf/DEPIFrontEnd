import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  standalone: true // Add this line to make it a standalone component
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      // Convert productId to a number before passing it to getProductById
      this.product = this.productService.getProductById(Number(productId)); // Ensure productId is a number
    } else {
      // Handle the case where productId is null
      console.error('Product ID is null');
    }
  }
}
