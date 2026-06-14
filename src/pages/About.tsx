import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-brand-cream min-h-screen"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Since 2025</span>
            <h1 className="font-serif text-5xl mb-6 text-brand-dark leading-tight">Crafting Excellence<br/>in Every Detail</h1>
            <div className="w-16 h-1 bg-brand-gold mb-8"></div>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
              <p>
                Founded in 2025, Baba Shyam Enterprises was born out of a passion for turning raw materials into functional art. We believe true luxury lies in the details. Every product in our collection is carefully designed and meticulously crafted to deliver a perfect balance of beauty, functionality, and durability.
              </p>
              <p>
                Inspired by timeless craftsmanship and modern aesthetics, our collection includes premium watch boxes, luxury bar sets, home décor accessories, and bespoke gifting solutions. 
              </p>
              <p>
                We create products that are not just useful, but become cherished possessions for years to come. Our commitment to quality ensures that every piece bearing our name is a testament to the artisan's skill and our dedication to excellence.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-brand-gold/10 transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070&auto=format&fit=crop" 
              alt="Artisan Craftsmanship" 
              className="relative z-10 w-full h-[600px] object-cover shadow-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white p-12 text-center shadow-sm">
            <h3 className="font-serif text-3xl mb-4 text-brand-dark">Our Mission</h3>
            <p className="text-gray-600 font-light">To create handcrafted products that combine luxury, functionality, and timeless design while maintaining the highest standards of quality and customer satisfaction.</p>
          </div>
          <div className="bg-brand-dark text-white p-12 text-center shadow-lg">
            <h3 className="font-serif text-3xl mb-4 text-brand-gold">Our Vision</h3>
            <p className="text-gray-300 font-light">To become a globally trusted name in premium handcrafted lifestyle products, recognized for exceptional craftsmanship, continuous innovation, and an unparalleled customer experience.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
