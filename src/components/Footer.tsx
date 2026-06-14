import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream pt-16 pb-8 border-t-[8px] border-brand-gold">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex flex-col mb-6">
              <div className="flex items-center gap-2 mb-3 cursor-pointer">
                <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-12 md:h-12 drop-shadow-md">
                  <defs>
                    <linearGradient id="gold-grad-footer" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#faeeb2" />
                      <stop offset="40%" stopColor="#d39f28" />
                      <stop offset="100%" stopColor="#875f10" />
                    </linearGradient>
                  </defs>
                  <g stroke="none" fill="url(#gold-grad-footer)">
                    <circle cx="65" cy="70" r="18" />
                    <path d="M 45 85 C 20 70, 20 30, 45 15 C 30 35, 30 65, 55 80 Z" />
                    <path d="M 30 90 C 0 70, 0 20, 60 5 C 25 20, 15 60, 40 85 Z" />
                    <path d="M 15 95 C -20 70, -20 0, 80 -5 C 20 10, -5 60, 25 90 Z" />
                  </g>
                </svg>
                <span className="italic font-sans font-black text-4xl md:text-5xl tracking-tighter bg-gradient-to-b from-[#faeeb2] via-[#d39f28] to-[#875f10] bg-clip-text text-transparent pb-1 pr-1">
                  BSE
                </span>
              </div>
              <span className="font-serif text-lg md:text-xl font-bold tracking-widest uppercase text-white leading-tight">
                BABA SHYAM ENTERPRISES
              </span>
            </div>
            <p className="text-gray-400 font-serif italic text-lg mb-6">
              "Where Craftsmanship Meets Luxury"
            </p>
            <p className="text-sm text-gray-400">
              Proudly supporting and elevating skilled Indian craftsmanship and local manufacturing since 2025.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans font-bold uppercase tracking-widest text-sm mb-6 text-brand-gold">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><button className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button className="hover:text-white transition-colors">Terms of Service</button></li>
              <li><button className="hover:text-white transition-colors">Shipping & Returns</button></li>
              <li><button className="hover:text-white transition-colors">FAQs</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold uppercase tracking-widest text-sm mb-6 text-brand-gold">Get In Touch</h4>
            <address className="not-italic text-sm text-gray-400 space-y-4">
              <p>📍 A-427, Gali No. 5/14,<br/>Samta Vihar, Mukundpur,<br/>North West Delhi – 110042</p>
              <p>📞 +91 9540704145</p>
              <p>📧 patelsempire@gmail.com</p>
              <p>🕒 Mon – Sat | 10:00 AM – 7:00 PM</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Baba Shyam Enterprises. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 uppercase tracking-widest">
            <span className="flex items-center gap-1">Made in <img src="https://flagcdn.com/w20/in.png" alt="India Flag" className="h-3 w-4 ml-1 opacity-70" /></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
