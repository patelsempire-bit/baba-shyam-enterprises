import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, PackageCheck, HeadphonesIcon } from 'lucide-react';

export default function Wholesale() {
  const [formType, setFormType] = useState<'register' | 'login'>('register');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-brand-cream min-h-screen"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl mb-4 text-brand-dark">Corporate & Wholesale Portal</h1>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">Partner with us to provide premium handcrafted products to your clients and customers.</p>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <div className="bg-brand-dark text-white p-10 h-full shadow-xl">
              <h3 className="font-serif text-3xl mb-8 text-brand-gold">Why Partner With Us?</h3>
              <p className="text-gray-300 font-light mb-10 leading-relaxed">
                We collaborate closely with industry professionals to provide high-end, tailored decor and utility solutions. By joining our wholesale program, you gain access to exclusive pricing, dedicated support, and bespoke custom manufacturing capabilities.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-brand-gold mt-1"><Building2 className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 tracking-wide">Bulk & Corporate Orders</h4>
                    <p className="text-sm text-gray-400">Special tiered pricing available for hotels, resorts, event planners, and corporate gifting.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-brand-gold mt-1"><PackageCheck className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 tracking-wide">Custom Branding</h4>
                    <p className="text-sm text-gray-400">Add your logo and branding to our premium products and packaging.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-brand-gold mt-1"><HeadphonesIcon className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 tracking-wide">Dedicated Support</h4>
                    <p className="text-sm text-gray-400">Direct access to our corporate sales team from sampling to final delivery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-10 shadow-sm h-full">
              <div className="flex border-b border-gray-200 mb-8">
                <button 
                  className={`pb-4 px-6 uppercase tracking-widest text-sm font-bold flex-1 ${formType === 'register' ? 'border-b-2 border-brand-dark text-brand-dark' : 'text-gray-400 hover:text-gray-800'}`}
                  onClick={() => setFormType('register')}
                >
                  Register as Retailer
                </button>
                <button 
                  className={`pb-4 px-6 uppercase tracking-widest text-sm font-bold flex-1 ${formType === 'login' ? 'border-b-2 border-brand-dark text-brand-dark' : 'text-gray-400 hover:text-gray-800'}`}
                  onClick={() => setFormType('login')}
                >
                  Retailer Login
                </button>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <PackageCheck className="w-16 h-16 text-brand-gold mx-auto mb-6" />
                  <h3 className="font-serif text-2xl mb-4 text-brand-dark">Application Received</h3>
                  <p className="text-gray-600 font-light mb-8">Thank you for your interest in partnering with Baba Shyam Enterprises. Our team will review your application and contact you within 1-2 business days.</p>
                  <button onClick={() => setSubmitted(false)} className="text-brand-gold uppercase tracking-widest font-bold text-sm hover:text-brand-dark">
                    Submit Another Application
                  </button>
                </div>
              ) : formType === 'register' ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Business Name *</label>
                      <input required type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Contact Person *</label>
                      <input required type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Email Address *</label>
                      <input required type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Phone Number *</label>
                      <input required type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Business Type *</label>
                    <select required className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent text-gray-700">
                      <option value="">Select an option...</option>
                      <option value="hotel">Hotel / Resort</option>
                      <option value="corporate">Corporate Buyer</option>
                      <option value="retail">Luxury Retail Store</option>
                      <option value="event">Event Planner / Wedding</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Additional Details / Expected Volumes</label>
                    <textarea rows={3} className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-gold bg-gray-50/50 mt-2"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-brand-dark text-white py-4 uppercase tracking-widest font-bold text-sm hover:bg-brand-gold transition-colors block text-center">
                    Submit Application
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Email Address</label>
                    <input required type="email" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-gold bg-transparent" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Password</label>
                    <input required type="password" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-gold bg-transparent" />
                  </div>
                  <button type="submit" className="w-full bg-brand-dark text-white py-4 uppercase tracking-widest font-bold text-sm hover:bg-brand-gold transition-colors block text-center mt-8">
                    Login to Portal
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-4">Note: This is a demo portal for AI preview.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
