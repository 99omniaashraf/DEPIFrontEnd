import { Product } from './product.model';

export interface Cart extends Product {
  quantity: number;
  imageUrl: string;
}
