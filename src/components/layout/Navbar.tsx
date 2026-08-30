import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall, 
  ChevronDown, 
  ExternalLink,
  Clock 
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import { SOCIAL_LINKS } from '../common/SocialIcons';

interface SubItem {
  name: string;
  path: string;
  isExternal?: boolean;
}

interface NavItem {
  name: string;
  path: string;
  subItems?: SubItem[];
}

interface NavbarProps {
  onRequestQuoteClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuoteClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
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
    setOpenMobileDropdown(null);
  }, [location.pathname]);

  // Exact navigation menu structure from candidate brief (Section 2)
  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    {
      name: 'About us',
      path: '/about',
      subItems: [
        { name: 'About Alishan Group', path: '/about#alishan-group' },
        { name: 'About Alishan Green Energy Pvt. Ltd.', path: '/about#alishan-energy' },
        {
          name: 'Alishan Company Profile (PDF)',
          path: 'https://www.alishangreenenergy.com/downloads/Alishan-Company-Profile.pdf',
          isExternal: true,
        },
      ],
    },
    {
      name: 'Products',
      path: '/products',
      subItems: [
        { name: 'Encapsulant Films (EVA / POE / EPE)', path: '/products?tab=encapsulant' },
        { name: 'Solar Backsheets (KPC / CPC / PPC)', path: '/products?tab=backsheet' },
      ],
    },
    { name: 'Gallery', path: '/gallery' },
    {
      name: 'R & D',
      path: '/rd-certifications',
      subItems: [
        { name: 'NABL Approved Lab (TC 15544)', path: '/rd-certifications#nabl' },
        { name: 'Awards & Certifications', path: '/rd-certifications#awards' },
      ],
    },
    { name: 'Career', path: '/career' },
    {
      name: 'News & Events',
      path: '/news-events',
      subItems: [
        { name: 'All Updates', path: '/news-events' },
        { name: 'Blog & Technical Insights', path: '/news-events?category=blog' },
        { name: 'Event / Exhibition', path: '/news-events?category=event-exhibition' },
        { name: 'Conference', path: '/news-events?category=conference' },
      ],
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A192F]/95 backdrop-blur-md border-b border-emerald-500/20 py-2.5 shadow-xl shadow-black/30'
          : 'bg-[#0A192F]/85 backdrop-blur-sm border-b border-white/5 py-3.5'
      }`}
    >
      {/* Top micro announcement bar */}
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
            Atma Nirbhar Bharat — Domestic Solar PV Polymer Extrusion
          </span>
          <span className="hidden xl:flex items-center text-slate-300">
            <Clock className="w-3 h-3 text-emerald-400 mr-1.5" />
            Monday – Saturday : 10am to 7pm
          </span>
          <span className="text-slate-600 hidden xl:inline">|</span>
          <a
            href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
            className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <PhoneCall className="w-3 h-3 text-emerald-400 mr-1" />
            {COMPANY_INFO.contact.phone}
          </a>

          {/* Social Icons */}
          <div className="flex items-center space-x-1 pl-3 border-l border-slate-700">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 p-1 transition-colors"
                aria-label={`Follow on ${s.name}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <div className="bg-white hover:bg-slate-50 px-3.5 py-1.5 rounded-2xl shadow-lg border border-white/40 transition-all duration-200 group-hover:scale-105 flex items-center">
              <img
                src="/logo.png"
                alt="Alishan Green Energy Pvt. Ltd."
                className="h-9 sm:h-10 w-auto object-contain"
                loading="eager"
              />
            </div>
          </Link>

          {/* Desktop Nav Items with Dropdowns */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const hasSub = Boolean(item.subItems && item.subItems.length > 0);

              return (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`inline-flex items-center px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{item.name}</span>
                    {hasSub && (
                      <ChevronDown className="w-3.5 h-3.5 ml-1 text-slate-400 group-hover:text-emerald-400 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Dropdown Floating Menu */}
                  {hasSub && (
                    <div className="absolute left-0 top-full pt-2 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                      <div className="bg-[#0A192F]/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl p-2 min-w-[260px] space-y-1">
                        {item.subItems!.map((sub) => {
                          if (sub.isExternal) {
                            return (
                              <a
                                key={sub.name}
                                href={sub.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
                              >
                                <span>{sub.name}</span>
                                <ExternalLink className="w-3.5 h-3.5 text-emerald-400 ml-2 shrink-0" />
                              </a>
                            );
                          }
                          return (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="block px-3 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Request Quote Action */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            {onRequestQuoteClick ? (
              <button
                type="button"
                onClick={onRequestQuoteClick}
                className="inline-flex items-center px-4 py-2 rounded-xl text-xs xl:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-[#0A192F] shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                Request A Quote
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            ) : (
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 rounded-xl text-xs xl:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-[#0A192F] shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                Request A Quote
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            )}
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0A192F] border-b border-emerald-500/20 px-4 pt-3 pb-6 mt-2 space-y-2 animate-fadeIn max-h-[85vh] overflow-y-auto">
          <div className="text-xs text-emerald-400 font-semibold px-3 py-1 bg-emerald-500/10 rounded mb-3 flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
            NABL Accredited Lab TC 15544 | ISO 9001, 14001, 45001
          </div>

          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const hasSub = Boolean(item.subItems && item.subItems.length > 0);
            const isSubOpen = openMobileDropdown === item.name;

            return (
              <div key={item.name} className="space-y-1">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.path}
                    className={`flex-grow px-3.5 py-2 rounded-lg text-sm font-medium ${
                      isActive
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {hasSub && (
                    <button
                      type="button"
                      onClick={() => setOpenMobileDropdown(isSubOpen ? null : item.name)}
                      className="p-2 text-slate-400 hover:text-white"
                      aria-label="Toggle sub-menu"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isSubOpen ? 'rotate-180 text-emerald-400' : ''}`}
                      />
                    </button>
                  )}
                </div>

                {hasSub && isSubOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-slate-800 ml-3">
                    {item.subItems!.map((sub) => {
                      if (sub.isExternal) {
                        return (
                          <a
                            key={sub.name}
                            href={sub.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-white"
                          >
                            <span>{sub.name}</span>
                            <ExternalLink className="w-3 h-3 text-emerald-400" />
                          </a>
                        );
                      }
                      return (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-white"
                        >
                          {sub.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
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
                className="w-full flex items-center justify-center px-4 py-3 rounded-xl text-sm font-bold bg-emerald-500 text-[#0A192F] shadow-lg shadow-emerald-500/25"
              >
                Request A Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            ) : (
              <Link
                to="/contact"
                className="w-full flex items-center justify-center px-4 py-3 rounded-xl text-sm font-bold bg-emerald-500 text-[#0A192F] shadow-lg shadow-emerald-500/25"
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
