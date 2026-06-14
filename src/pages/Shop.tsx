import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { INVENTORY, CATEGORIES } from '../data';
import { ShoppingBag, ChevronRight } from 'lucide-react';
import { Page } from '../types';

interface ShopProps {
  setPage: (page: Page) => void;
}

export default function Shop({ setPage }: ShopProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredInventory = activeCategory === 'All' 
    ? INVENTORY 
    : INVENTORY.filter(item => item.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-cream pt-32 pb-24"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl mb-4 text-brand-dark">Shop Collections</h1>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">Explore our premium inventory of handcrafted lifestyle products.</p>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button 
            onClick={() => setActiveCategory('All')}
            className={`px-6 py-2 uppercase tracking-widest text-xs font-bold border transition-colors ${
              activeCategory === 'All' ? 'bg-brand-dark text-white border-brand-dark' : 'bg-transparent text-brand-dark border-gray-300 hover:border-brand-dark'
            }`}
          >
            All
          </button>
          {CATEGORIES.map(cat => (
            <button 
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-6 py-2 uppercase tracking-widest text-xs font-bold border transition-colors ${
                activeCategory === cat.name ? 'bg-brand-dark text-white border-brand-dark' : 'bg-transparent text-brand-dark border-gray-300 hover:border-brand-dark'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredInventory.map(product => (
            <div key={product.id} className="group bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square overflow-hidden bg-gray-100 mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button onClick={() => setPage('wholesale')} className="bg-white text-brand-dark px-6 py-3 uppercase text-xs font-bold tracking-widest flex items-center gap-2 hover:bg-brand-gold hover:text-white transition-colors">
                    <ShoppingBag className="w-4 h-4" /> Bulk Order
                  </button>
                </div>
              </div>
              <div className="text-center">
                <span className="text-brand-gold uppercase tracking-[0.2em] text-[0.65rem] font-bold block mb-2">{product.category}</span>
                <h3 className="font-serif text-xl mb-3 text-brand-dark">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">{product.description}</p>
                <div className="border-t border-gray-100 pt-4 flex justify-between items-center text-sm font-sans mx-4">
                  <div className="text-left">
                    <span className="block text-gray-400 text-xs uppercase tracking-wider">Wholesale</span>
                    <span className="font-bold text-lg">₹{product.wholesalePrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-gray-400 text-xs uppercase tracking-wider">MOQ</span>
                    <span className="font-medium text-gray-700">{product.minOrderQuantity} Units</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-brand-dark text-brand-cream p-12 text-center flex flex-col items-center">
          <h2 className="font-serif text-3xl mb-4">Want to become a retail partner?</h2>
          <p className="mb-8 font-light max-w-xl text-gray-300">Register as a wholesale buyer to access bulk pricing, custom branding, and dedicated corporate support.</p>
          <button 
            onClick={() => setPage('wholesale')}
            className="bg-brand-gold text-brand-dark px-8 py-3 uppercase tracking-widest font-bold text-sm hover:bg-white transition-colors"
          >
            Go to Wholesale Portal
          </button>
        </div>
      </div>
    </motion.div>
  );
}
