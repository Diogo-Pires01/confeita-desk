export type ProductCategory = 'bolos' | 'tortas' | 'doces';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
}
