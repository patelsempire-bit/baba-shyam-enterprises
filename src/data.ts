import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'watch-boxes',
    name: 'Luxury Watch Boxes',
    description: 'Protect and display your valuable timepieces with elegance. Crafted with premium materials and refined detailing.',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'bar-sets',
    name: 'Premium Bar Sets',
    description: 'Sophisticated bar accessories designed for home bars, hotels, resorts, and premium gifting.',
    image: 'https://images.unsplash.com/photo-1601244583162-811c01b1a774?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'home-decor',
    name: 'Home Décor',
    description: 'Handcrafted pieces that add warmth, style, and character to every corner of your living space.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 'corporate-gifting',
    name: 'Corporate & Luxury Gifting',
    description: 'Customized gifting solutions tailored for businesses, high-profile events, weddings, and special occasions.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop',
  },
  {
    id: 'custom-manufacturing',
    name: 'Custom Manufacturing',
    description: 'Tailored products designed according to your exact specifications, branding requirements, and unique preferences.',
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2070&auto=format&fit=crop',
  }
];

export const INVENTORY: Product[] = [
  {
    id: 'wb-001',
    name: 'Executive 6-Slot Walnut Watch Box',
    category: 'Watch Boxes',
    description: 'A genuine walnut wood finish watch box with plush velvet interior, perfect for holding up to 6 luxury timepieces.',
    wholesalePrice: 4500,
    minOrderQuantity: 10,
    image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=2004&auto=format&fit=crop',
  },
  {
    id: 'wb-002',
    name: 'Classic 12-Slot Leatherette Organizer',
    category: 'Watch Boxes',
    description: 'Elegant black leatherette finish with glass top display and key lock mechanism.',
    wholesalePrice: 6200,
    minOrderQuantity: 5,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 'bs-001',
    name: 'Opulence 5-Piece Mixology Bar Set',
    category: 'Bar Sets',
    description: 'Includes stainless steel shaker, jigger, strainer, muddler, and mixing spoon in a premium wooden stand.',
    wholesalePrice: 3800,
    minOrderQuantity: 15,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'bs-002',
    name: 'Vintage Leather Travel Bar Case',
    category: 'Bar Sets',
    description: 'Exquisite handcrafted leather case housing essential bar tools and space for bottles. Ideal for luxury gifting.',
    wholesalePrice: 12500,
    minOrderQuantity: 5,
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'hd-001',
    name: 'Handcrafted Brass Centerpiece Bowl',
    category: 'Home Décor',
    description: 'A striking hammered brass bowl that adds an artisanal, warm touch to any dining or living room.',
    wholesalePrice: 2800,
    minOrderQuantity: 20,
    image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?q=80&w=2098&auto=format&fit=crop',
  },
  {
    id: 'cg-001',
    name: 'Signature Bespoke Gifting Hamper',
    category: 'Corporate Gifting',
    description: 'A curated hamper with a mini bar set, leather coasters, and customizable branding options for corporate events.',
    wholesalePrice: 5500,
    minOrderQuantity: 50,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop',
  }
];
