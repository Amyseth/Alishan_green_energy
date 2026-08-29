import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import QuoteModal from './components/ui/QuoteModal';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import RdCertifications from './pages/RdCertifications';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';

export const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [prefilledProduct, setPrefilledProduct] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (productName?: string) => {
    setPrefilledProduct(productName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setPrefilledProduct(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A192F] text-slate-100 selection:bg-emerald-500 selection:text-slate-950 font-sans">
      <ScrollToTop />
      
      {/* Main Header / Navigation */}
      <Navbar onRequestQuoteClick={() => handleOpenQuoteModal()} />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={<Home onRequestQuote={handleOpenQuoteModal} />}
          />
          <Route
            path="/about"
            element={<About onRequestQuote={() => handleOpenQuoteModal()} />}
          />
          <Route
            path="/products"
            element={<Products onRequestQuote={handleOpenQuoteModal} />}
          />
          <Route
            path="/rd-certifications"
            element={
              <RdCertifications onRequestQuote={() => handleOpenQuoteModal()} />
            }
          />
          <Route
            path="/sustainability"
            element={
              <Sustainability onRequestQuote={() => handleOpenQuoteModal()} />
            }
          />
          <Route path="/contact" element={<Contact />} />

          {/* Catch-all fallback */}
          <Route
            path="*"
            element={<Home onRequestQuote={handleOpenQuoteModal} />}
          />
        </Routes>
      </main>

      {/* Corporate B2B Footer */}
      <Footer />

      {/* Global RFQ / Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialProduct={prefilledProduct}
      />
    </div>
  );
};

export default App;
