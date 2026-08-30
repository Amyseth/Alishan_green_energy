import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  ArrowUpRight,
  ExternalLink,
  Clock,
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import { SOCIAL_LINKS } from '../common/SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070F1E] border-t border-slate-800/80 text-slate-400 relative overflow-hidden">
      {/* Top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company Profile (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group mb-3">
              <div className="bg-white hover:bg-slate-50 px-4 py-2 rounded-2xl inline-flex items-center shadow-lg border border-white/40 transition-all">
                <img
                  src="/logo.png"
                  alt="Alishan Green Energy Pvt. Ltd."
                  className="h-11 sm:h-12 w-auto object-contain"
                />
              </div>
            </Link>

            <div className="space-y-2">
              <div className="text-emerald-400 font-bold text-sm tracking-tight">
                Alishan Green Energy Manifests Into Solar Products &amp; Solutions
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
                Our Encapsulants and Backsheets are designed to empower the solar industry, bridging the gap between cutting-edge polymer technology and scalable energy solutions for a sustainable tomorrow.
              </p>
            </div>

            {/* Certifications Badge Pills */}
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Award className="w-3.5 h-3.5 mr-1" />
                NABL TC 15544
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-amber-400" />
                ISO 9001:2015
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                ISO 14001:2015
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                ISO 45001:2018
              </span>
            </div>

            {/* Social Media Links */}
            <div className="pt-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Official Social Media
              </span>
              <div className="flex items-center space-x-2">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-slate-800/90 hover:bg-emerald-500 hover:text-slate-950 border border-slate-700/80 hover:border-emerald-400 flex items-center justify-center text-slate-300 transition-all duration-200"
                    aria-label={`Visit Alishan Green Energy on ${s.name}`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center group">
                  Home
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center group">
                  About Us
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-emerald-400 transition-colors flex items-center group">
                  Product Catalog
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/rd-certifications" className="hover:text-emerald-400 transition-colors flex items-center group">
                  R&D & Lab Testing
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition-colors flex items-center group">
                  Facility Gallery
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-emerald-400 transition-colors flex items-center group">
                  Careers &amp; Openings
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/news-events" className="hover:text-emerald-400 transition-colors flex items-center group">
                  News &amp; Events (Blog)
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-emerald-400 transition-colors flex items-center group">
                  Sustainability
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors flex items-center group text-emerald-400 font-medium">
                  Request A Quote
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-100" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Solar PV Products
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-xs font-semibold text-emerald-400 uppercase tracking-wider pt-1">
                Encapsulants
              </li>
              <li>
                <Link to="/products?cat=encapsulants" className="hover:text-white transition-colors">
                  Alishan FC (Fast Cure EVA)
                </Link>
              </li>
              <li>
                <Link to="/products?cat=encapsulants" className="hover:text-white transition-colors">
                  Alishan UFC (Ultra-Fast Cure)
                </Link>
              </li>
              <li>
                <Link to="/products?cat=encapsulants" className="hover:text-white transition-colors">
                  Alishan POE & Co-extruded EPE
                </Link>
              </li>
              <li>
                <Link to="/products?cat=encapsulants" className="hover:text-white transition-colors">
                  Alishan EPE-NT & Low-Acid EVA
                </Link>
              </li>
              <li>
                <Link to="/products?cat=encapsulants" className="hover:text-white transition-colors">
                  Alishan EPE-DC (UV Down-Conversion)
                </Link>
              </li>
              <li className="text-xs font-semibold text-emerald-400 uppercase tracking-wider pt-2">
                Backsheets
              </li>
              <li>
                <Link to="/products?cat=backsheets" className="hover:text-white transition-colors">
                  Backpro Series (KPC / CPC / PPC / -T)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Manufacturing Facilities & Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Locations & Contact
            </h3>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Head Office:</span>
                  <span>{COMPANY_INFO.headOffice.full}</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Factory Plant:</span>
                  <span>{COMPANY_INFO.factory.full}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 pt-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors font-medium text-slate-200"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="hover:text-white transition-colors text-slate-200"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>

              <div className="flex items-center space-x-2.5 pt-1 text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Monday – Saturday : 10am to 7pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center space-x-2">
            <span>Copyright 2021 Alishan Green Energy Pvt. Ltd. All Rights Reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="inline-flex items-center text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2"></span>
              Proudly Manufactured in Chhattisgarh, India
            </span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms & Technical Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
