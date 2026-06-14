import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          <h1 className="font-serif text-5xl mb-4 text-brand-dark">Get In Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">Whether you want to place a bulk order, customize a product, or simply have a question, our team is here to help.</p>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 shadow-sm h-full border-t-4 border-brand-dark">
              <h3 className="font-sans text-xl font-bold uppercase tracking-wider mb-8 text-brand-dark">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-cream text-brand-gold rounded-full shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide mb-1">Our Studio</h4>
                    <p className="text-gray-600 font-light text-sm">A-427, Gali No. 5/14,<br/>Samta Vihar, Mukundpur,<br/>North West Delhi – 110042</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-cream text-brand-gold rounded-full shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide mb-1">Call Us</h4>
                    <p className="text-gray-600 font-light text-sm">+91 9540704145</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-cream text-brand-gold rounded-full shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide mb-1">Email</h4>
                    <p className="text-gray-600 font-light text-sm">patelsempire@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-cream text-brand-gold rounded-full shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide mb-1">Business Hours</h4>
                    <p className="text-gray-600 font-light text-sm">Monday – Saturday<br/>10:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-10 shadow-sm">
              <h3 className="font-serif text-3xl mb-8 text-brand-dark">Send us a message</h3>
              
              {submitted ? (
                <div className="bg-green-50 text-green-800 p-6 rounded border border-green-200 text-center">
                  <h4 className="font-bold text-lg mb-2">Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Your Name *</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-gold transition-colors bg-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Email Address *</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-gold transition-colors bg-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-gold transition-colors bg-transparent"
                        placeholder="+91..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Subject inquiry *</label>
                      <select 
                        required
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-gold transition-colors bg-transparent text-gray-700"
                      >
                        <option value="">Select a subject...</option>
                        <option value="wholesale">Wholesale / Bulk Order</option>
                        <option value="custom">Custom Manufacturing</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Message *</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full border border-gray-300 p-4 focus:outline-none focus:border-brand-gold transition-colors bg-gray-50/50 mt-2"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="bg-brand-dark text-brand-cream px-10 py-4 uppercase tracking-widest font-bold text-sm hover:bg-brand-gold transition-colors w-full md:w-auto mt-4"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
