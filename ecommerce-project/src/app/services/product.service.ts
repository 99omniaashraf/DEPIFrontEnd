import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 100, imageUrl: '/ecommerce-project/src/assets/img/picture9.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 150, imageUrl: '/ecommerce-project/src/assets/img/picture13.jpg' },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 200, imageUrl: '/ecommerce-project/src/assets/img/picture12.jpg' }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products); // Simulate API with RxJS Observable
  };

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
}

}
