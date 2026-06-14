import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, PhoneCall } from 'lucide-react';
import { Page } from '../types';
import { motion } from 'framer-motion';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Shop All', page: 'shop' },
    { label: 'Corporate & Custom', page: 'wholesale' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const navigate = (page: Page) => {
    setPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center cursor-pointer gap-2 md:gap-3" 
            onClick={() => navigate('home')}
          >
            {/* BSE Symbol & Logo */}
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10 drop-shadow-sm" aria-hidden="true">
                <defs>
                  <linearGradient id="gold-grad-nav" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#faeeb2" />
                    <stop offset="40%" stopColor="#d39f28" />
                    <stop offset="100%" stopColor="#875f10" />
                  </linearGradient>
                </defs>
                <g stroke="none" fill="url(#gold-grad-nav)">
                  <circle cx="65" cy="70" r="18" />
                  <path d="M 45 85 C 20 70, 20 30, 45 15 C 30 35, 30 65, 55 80 Z" />
                  <path d="M 30 90 C 0 70, 0 20, 60 5 C 25 20, 15 60, 40 85 Z" />
                  <path d="M 15 95 C -20 70, -20 0, 80 -5 C 20 10, -5 60, 25 90 Z" />
                </g>
              </svg>
              <span className="italic font-sans font-black text-3xl md:text-4xl tracking-tighter bg-gradient-to-b from-[#faeeb2] via-[#d39f28] to-[#875f10] bg-clip-text text-transparent pb-1 pr-1">
                BSE
              </span>
            </div>
            
            <div className={`hidden sm:block h-8 w-px mx-1 ${isScrolled ? 'bg-gray-300' : 'bg-gray-300'}`}></div>
            
            <span className={`hidden sm:block font-serif text-sm md:text-base font-bold tracking-widest uppercase leading-tight ${isScrolled ? 'text-brand-dark' : 'text-brand-dark'}`}>
              BABA SHYAM<br/>ENTERPRISES
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => navigate(link.page)}
                className={`text-sm uppercase tracking-wider font-medium hover:text-brand-gold transition-colors ${
                  currentPage === link.page ? 'text-brand-gold' : 'text-brand-dark'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex">
            <button 
              onClick={() => navigate('wholesale')}
              className="bg-brand-dark text-brand-cream px-6 py-2.5 text-sm uppercase tracking-wider hover:bg-brand-gold transition-colors flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Wholesale Portal
            </button>
          </div>

          <button 
            className="md:hidden text-brand-dark p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 md:hidden flex flex-col px-6">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => navigate(link.page)}
              className={`py-3 text-left text-sm uppercase tracking-wider font-medium border-b border-gray-100 ${
                currentPage === link.page ? 'text-brand-gold' : 'text-brand-dark'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => navigate('wholesale')}
            className="bg-brand-dark text-brand-cream px-6 py-3 mt-4 text-sm uppercase tracking-wider hover:bg-brand-gold transition-colors flex justify-center items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Wholesale Portal
          </button>
        </div>
      )}
    </motion.header>
  );
}
