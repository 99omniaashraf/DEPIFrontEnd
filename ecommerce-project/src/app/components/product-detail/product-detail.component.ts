import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  standalone: true
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      // تحويل productId إلى رقم وتمريره إلى getProductById
      this.product = this.productService.getProductById(Number(productId));

      if (!this.product) {
        console.error('Product not found');
      }
    } else {
      console.error('Product ID is null');
    }
  }

  addToCart(): void {
    if (this.product) {
      console.log('تمت إضافة المنتج إلى عربة التسوق:', this.product);
    } else {
      console.error('لا يمكن إضافة المنتج إلى عربة التسوق لأن المنتج غير موجود.');
    }
  }
}
