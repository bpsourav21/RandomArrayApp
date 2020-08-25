export interface ProductDto {
  ImgUrl: string;
  Name: string;
  Unit: string;
  Price: number;
}

export interface Product {
  products: ProductDto[];
}
