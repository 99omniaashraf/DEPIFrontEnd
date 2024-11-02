import { Cart } from './cart.model';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock?: boolean;
  quantity: number;
}
