import {ProductDto} from './Product';

export interface CartItemDto {
  Product: ProductDto;
  Quantity: number;
}

export interface Cart {
  cart: CartItemDto[];
}
