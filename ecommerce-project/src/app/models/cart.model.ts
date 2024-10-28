import { Product } from './product.interface';

export interface Cart extends Product {
  quantity: number;
  imageUrl: string;
}
