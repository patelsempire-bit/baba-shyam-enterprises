import React from 'react';
import { motion } from 'framer-motion';
import { Page } from '../types';
import { CATEGORIES } from '../data';
import { ShieldCheck, Star, Clock, HeartHandshake } from 'lucide-react';

interface HomeProps {
  setPage: (page: Page) => void;
}

export default function Home({ setPage }: HomeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop" 
            alt="Luxury Bar Set and Watch Box"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-7xl text-center text-white">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center gap-4 text-xs font-bold uppercase tracking-[0.2em] mb-8 text-brand-gold"
          >
            <span>Premium Quality</span>
            <span>•</span>
            <span>Handcrafted Excellence</span>
            <span>•</span>
            <span>Made in India</span>
          </motion.div>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 mx-auto leading-tight"
          >
            Handcrafted Luxury <br/> <span className="italic font-light">for Modern Living</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light"
          >
            Discover beautifully crafted products that combine functionality, elegance, and attention to detail. Designed for homes, collectors, premium gifting, and hospitality spaces.
          </motion.p>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button 
              onClick={() => setPage('shop')}
              className="bg-brand-gold text-brand-dark px-10 py-4 uppercase tracking-widest font-bold text-sm hover:bg-white transition-colors"
            >
              Shop Collection
            </button>
            <button 
              onClick={() => setPage('contact')}
              className="bg-transparent border border-white text-white px-10 py-4 uppercase tracking-widest font-bold text-sm hover:bg-white hover:text-brand-dark transition-colors"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4 text-brand-dark">Our Collections</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((cat, index) => (
              <div 
                key={cat.id} 
                className={`group cursor-pointer overflow-hidden relative h-[400px] ${index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                onClick={() => setPage('shop')}
              >
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="font-serif text-2xl text-white mb-2">{cat.name}</h3>
                  <p className="text-sm text-gray-300 font-light mb-4 line-clamp-2">{cat.description}</p>
                  <span className="text-brand-gold uppercase tracking-widest text-xs font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Collection <span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4 text-brand-dark">Why Choose Us</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Star className="w-10 h-10 stroke-1" />, title: 'Premium Craftsmanship', desc: 'Every product is crafted with meticulous attention to detail and a superior finish.' },
              { icon: <ShieldCheck className="w-10 h-10 stroke-1" />, title: 'Quality Materials', desc: 'We use only carefully selected materials to ensure lifelong durability and luxury appeal.' },
              { icon: <Clock className="w-10 h-10 stroke-1" />, title: 'Timeless Design', desc: 'Contemporary aesthetics effortlessly blended with classic craftsmanship.' },
              { icon: <HeartHandshake className="w-10 h-10 stroke-1" />, title: 'Custom Solutions', desc: 'Personalized designs and corporate branding options tailored to your needs.' }
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto w-20 h-20 bg-brand-cream text-brand-gold rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-sans font-bold text-lg mb-3 tracking-wide">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
