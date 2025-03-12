import { Product, Category } from '../types';

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Golden Petal Necklace',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'necklaces',
    featured: true,
    description: 'Handcrafted golden petal necklace with delicate design.'
  },
  {
    id: 2,
    name: 'Silver Wave Bracelet',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'bracelets',
    featured: true,
    description: 'Elegant silver bracelet with a wave-like pattern.'
  },
  {
    id: 3,
    name: 'Pearl Drop Earrings',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'earrings',
    featured: true,
    description: 'Classic pearl drop earrings for any occasion.'
  },
  {
    id: 4,
    name: 'Diamond Cluster Ring',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'rings',
    featured: true,
    new: true,
    description: 'Stunning diamond cluster ring with brilliant stones.'
  },
  {
    id: 5,
    name: 'Emerald Stud Earrings',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1608508644127-ba99d7732fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80',
    category: 'earrings',
    featured: true,
    description: 'Vibrant emerald stud earrings set in gold.'
  },
  {
    id: 6,
    name: 'Rose Gold Bangle',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'bracelets',
    featured: true,
    new: true,
    description: 'Elegant rose gold bangle with minimalist design.'
  },
  {
    id: 7,
    name: 'Sapphire Pendant',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    category: 'necklaces',
    featured: true,
    description: 'Beautiful sapphire pendant on a delicate chain.'
  },
  {
    id: 8,
    name: 'Twisted Gold Hoop Earrings',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1626784215021-2faa6a929556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'earrings',
    featured: true,
    description: 'Twisted gold hoop earrings for everyday elegance.'
  }
];

export const categories: Category[] = [
  {
    id: 1,
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    slug: 'necklaces'
  },
  {
    id: 2,
    name: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    slug: 'bracelets'
  },
  {
    id: 3,
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    slug: 'earrings'
  },
  {
    id: 4,
    name: 'Rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    slug: 'rings'
  }
];