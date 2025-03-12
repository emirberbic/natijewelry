export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  new?: boolean;
  description?: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}