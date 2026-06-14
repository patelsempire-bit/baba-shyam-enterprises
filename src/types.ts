export type Page = 'home' | 'shop' | 'about' | 'contact' | 'wholesale';

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  wholesalePrice: number;
  minOrderQuantity: number;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}
