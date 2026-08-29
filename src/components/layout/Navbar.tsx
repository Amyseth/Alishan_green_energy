import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, ShieldCheck, ArrowRight, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

interface NavbarProps {
  onRequestQuoteClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuoteClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'R&D & Certifications', path: '/rd-certifications' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A192F]/95 backdrop-blur-md border-b border-emerald-500/20 py-3 shadow-xl shadow-black/20'
          : 'bg-[#0A192F]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      {/* Top micro banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 hidden lg:flex items-center justify-between text-xs text-slate-400 border-b border-white/5 pb-2">
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1.5"></span>
            NABL Accredited Testing Lab (TC 15544)
          </span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400 mr-1" />
            IMS Certified: ISO 9001, 14001, 45001
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <span className="text-slate-400">
            Atma Nirbhar Bharat — Domestic Solar PV Indigenisation
          </span>
          <a
            href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
            className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <PhoneCall className="w-3 h-3 text-emerald-400 mr-1" />
            {COMPANY_INFO.contact.phone}
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with Official Alishan Logo */}
          <Link to="/" className="flex items-center group">
            <div className="bg-white hover:bg-slate-50 px-4 py-2 rounded-2xl shadow-lg border border-white/40 transition-all duration-200 group-hover:scale-105 flex items-center">
              <img
                src="/logo.png"
                alt="Alishan Green Energy Pvt. Ltd."
                className="h-10 sm:h-11 w-auto object-contain"
                loading="eager"
              />
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Request Quote Action */}
          <div className="hidden lg:flex items-center space-x-4">
            {onRequestQuoteClick ? (
              <button
                type="button"
                onClick={onRequestQuoteClick}
                className="inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-[#0A192F] shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                Request A Quote
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            ) : (
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-[#0A192F] shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                Request A Quote
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0A192F] border-b border-emerald-500/20 px-4 pt-3 pb-6 mt-2 space-y-2 animate-fadeIn">
          <div className="text-xs text-emerald-400 font-semibold px-3 py-1 bg-emerald-500/10 rounded mb-3 flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
            NABL Accredited Lab TC 15544 | ISO Certified
          </div>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3.5 py-2.5 rounded-lg text-base font-medium ${
                  isActive
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3">
            {onRequestQuoteClick ? (
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onRequestQuoteClick();
                }}
                className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-base font-semibold bg-emerald-500 text-[#0A192F] shadow-lg shadow-emerald-500/25"
              >
                Request A Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            ) : (
              <Link
                to="/contact"
                className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-base font-semibold bg-emerald-500 text-[#0A192F] shadow-lg shadow-emerald-500/25"
              >
                Request A Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
