export interface Product {
  id: string;
  name: string;
  category: 'mithai' | 'dry-fruits' | 'farsan' | 'gift-boxes' | 'hampers';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  badge?: 'New' | 'Bestseller' | 'Limited Edition' | 'Artisanal';
  tagline: string;
  weight: string;
  description: string;
  ingredients: string[];
  shelfLife: string;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
}

export interface Category {
  id: string;
  name: string;
  subtitle: string;
  itemsCount: string;
  imageUrl: string;
  accent: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  occasion: string;
  verified: boolean;
}
