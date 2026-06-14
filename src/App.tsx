/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Wholesale from './pages/Wholesale';
import { Page } from './types';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && <Home key="home" setPage={setCurrentPage} />}
          {currentPage === 'shop' && <Shop key="shop" setPage={setCurrentPage} />}
          {currentPage === 'about' && <About key="about" />}
          {currentPage === 'contact' && <Contact key="contact" />}
          {currentPage === 'wholesale' && <Wholesale key="wholesale" />}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
