import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  Factory,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import QuoteForm from '../components/ui/QuoteForm';

export const Contact: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Page Header with Custom Contact Hero Photo */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pb-28 border-b border-emerald-500/20">
        {/* Background Hero Image with Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/heroes/contact-hero.jpg"
            alt="Alishan Sustainable Energy Corporate Consultation Hub"
            className="w-full h-full object-cover object-center scale-105 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/85 to-[#0A192F]/65"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <span>Direct Commercial &amp; Technical Channel</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
              Request A Quote &amp; Technical Consultation
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed drop-shadow">
              Connect directly with our engineering and procurement team in Raipur. Inquiries are processed within 24 business hours, with sample rolls dispatched for qualification.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Official Contact & Addresses (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Building2 className="w-5 h-5 text-emerald-400 mr-2" />
                Contact Information
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block font-medium">Telephone Direct Line</span>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
                      className="font-bold text-white hover:text-emerald-400 transition-colors text-base"
                    >
                      {COMPANY_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block font-medium">Official Inquiry Email</span>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="font-semibold text-emerald-400 hover:underline"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block font-medium">Office & Factory Working Hours</span>
                    <span className="text-slate-300 font-medium">{COMPANY_INFO.contact.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Physical Locations */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
              <h2 className="text-lg font-bold text-white flex items-center">
                <MapPin className="w-5 h-5 text-emerald-400 mr-2" />
                Physical Facilities
              </h2>

              {/* Head Office */}
              <div className="p-4 rounded-xl bg-[#0A192F] border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    Corporate Head Office
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {COMPANY_INFO.headOffice.addressLine1},<br />
                  {COMPANY_INFO.headOffice.addressLine2},<br />
                  {COMPANY_INFO.headOffice.stateAndPin}, {COMPANY_INFO.headOffice.country}
                </p>
              </div>

              {/* Factory */}
              <div className="p-4 rounded-xl bg-[#0A192F] border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2">
                  <Factory className="w-4 h-4 text-amber-400" />
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    Extrusion Factory & NABL Lab
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {COMPANY_INFO.factory.addressLine1},<br />
                  {COMPANY_INFO.factory.addressLine2},<br />
                  {COMPANY_INFO.factory.stateAndPin}, {COMPANY_INFO.factory.country}
                </p>
              </div>

              {/* Quality Seal */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                <span className="flex items-center">
                  <Award className="w-3.5 h-3.5 text-emerald-400 mr-1" />
                  NABL TC 15544
                </span>
                <span className="flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400 mr-1" />
                  ISO 9001/14001/45001
                </span>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Official Channels
                </span>
                <div className="flex items-center space-x-2.5">
                  <a
                    href="https://www.linkedin.com/company/alishan-green-energy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <span className="text-xs font-bold">LinkedIn</span>
                  </a>
                  <a
                    href="https://twitter.com/alishan_green"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 transition-colors"
                    aria-label="Twitter / X"
                  >
                    <span className="text-xs font-bold">X (Twitter)</span>
                  </a>
                  <a
                    href="https://www.facebook.com/alishangreenenergy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 transition-colors"
                    aria-label="Facebook"
                  >
                    <span className="text-xs font-bold">Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/alishangreenenergy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 transition-colors"
                    aria-label="Instagram"
                  >
                    <span className="text-xs font-bold">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Supabase Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-emerald-500/30 shadow-2xl relative">
              <div className="mb-6 space-y-1">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                  Direct Inquiries & Sample Requests
                </span>
                <h2 className="text-2xl font-bold text-white">
                  Send Your Quotation Request
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Data submitted here writes directly to our PostgreSQL database hosted on Supabase with row-level security.
                </p>
              </div>

              <QuoteForm compact={false} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
