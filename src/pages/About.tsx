import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Award,
  Factory,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface AboutProps {
  onRequestQuote: () => void;
}

export const About: React.FC<AboutProps> = ({ onRequestQuote }) => {
  return (
    <div className="space-y-20">
      {/* Header Banner with Custom Hero Photo */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pb-28 border-b border-emerald-500/20">
        {/* Background Hero Image with Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/heroes/about-hero.jpg"
            alt="Alishan Green Energy Advanced Polymer Innovation Center"
            className="w-full h-full object-cover object-center scale-105 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/85 to-[#0A192F]/65"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <span>About Alishan Green Energy</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
              Pioneering Domestic Solar Material Autonomy
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed drop-shadow">
              {COMPANY_INFO.subTagline}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-emerald-500/30 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              "{COMPANY_INFO.vision}"
            </p>
            <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-emerald-400 font-semibold flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-2 shrink-0" />
              Aligned with Ministry of New and Renewable Energy (MNRE) goals
            </div>
          </div>

          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To engineer and supply world-class solar PV encapsulant films and backsheets that empower domestic solar panel manufacturers with unmatched durability, competitive total cost of ownership, and verifiable zero-defect reliability.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-amber-400 font-semibold flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-2 shrink-0" />
              3.5+ GW Annual Production Capacity
            </div>
          </div>
        </div>
      </section>

      {/* Group Story & Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
              <span>The Alishan Legacy</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Rooted in Central India, Engineered for Global Standards
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Alishan Green Energy Pvt. Ltd. was established to address a critical vulnerability in India's rapid renewable energy adoption: while module assembly capacity surged, crucial bill of materials (BOM) like EVA, POE, and backsheet films remained heavily dependent on imports.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              By establishing our advanced multi-line extrusion plant in Seoni, Raipur (Chhattisgarh), we invested deeply in European-engineered machinery, cleanroom extrusion standards, and an accredited testing laboratory to deliver domestic raw materials that withstand India's extreme high-heat, high-humidity climatic conditions.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-colors shadow-lg shadow-emerald-500/25"
              >
                <span>Partner With Alishan</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center space-x-4 mb-2">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm">
                  01
                </span>
                <h3 className="text-base font-bold text-white">Domestic Supply Chain Resilience</h3>
              </div>
              <p className="text-xs text-slate-400 pl-12 leading-relaxed">
                Shorten procurement lead times from 8–10 weeks (overseas shipping) to 3–5 days direct factory-to-module line delivery across India.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center space-x-4 mb-2">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm">
                  02
                </span>
                <h3 className="text-base font-bold text-white">Zero Foreign Exchange Risk</h3>
              </div>
              <p className="text-xs text-slate-400 pl-12 leading-relaxed">
                Shield your module BOM from currency fluctuations, ocean freight spikes, and international customs bottlenecks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center space-x-4 mb-2">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm">
                  03
                </span>
                <h3 className="text-base font-bold text-white">Full ALMM & DCR Compliance</h3>
              </div>
              <p className="text-xs text-slate-400 pl-12 leading-relaxed">
                Meet all domestic content requirements for government, CPSU scheme, and SECI utility solar tenders seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Our Guiding Principles
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">Core Values That Define Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.coreValues.map((val, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm mb-4">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities & Infrastructure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Locations & Facilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Strategic Raipur Operations
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Operating out of Chhattisgarh's premier industrial and commercial corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-[#0A192F] border border-slate-800 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Corporate Head Office</h3>
                  <p className="text-xs text-emerald-400">Raipur Central Business District</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {COMPANY_INFO.headOffice.full}
              </p>
              <div className="pt-2 text-xs text-slate-400 border-t border-slate-800">
                Corporate strategy, national sales, procurement contracts, and executive management.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A192F] border border-slate-800 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Extrusion Factory & NABL Lab</h3>
                  <p className="text-xs text-amber-400">Manufacturing & QA Complex</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {COMPANY_INFO.factory.full}
              </p>
              <div className="pt-2 text-xs text-slate-400 border-t border-slate-800">
                Multi-line polymer extrusion, cleanroom slitting, NABL TC 15544 laboratory, and logistics warehousing.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Integrated Quality & Safety Frameworks
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Adhering to the highest international benchmarks in quality, environment, and occupational safety.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                  {cert.code}
                </span>
                <ShieldCheck className="w-5 h-5 text-slate-500" />
              </div>
              <h3 className="text-sm font-bold text-white">{cert.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/rd-certifications"
            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center space-x-1"
          >
            <span>Learn more about our NABL Laboratory protocols</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Official Corporate Dossiers & Downloads */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Corporate Resources
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Official Corporate Dossiers & Presentations
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Download verified corporate background documents directly from Alishan Green Energy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <a
              href="https://www.alishangreenenergy.com/wp-content/uploads/2025/02/About-Alishan-Group.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#0A192F] border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center justify-between group"
            >
              <div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                  About Alishan Group
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Corporate history & group ventures</div>
              </div>
              <span className="text-xs font-semibold text-emerald-400 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                PDF
              </span>
            </a>

            <a
              href="https://www.alishangreenenergy.com/downloads/Alishan-Company-Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#0A192F] border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center justify-between group"
            >
              <div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                  Alishan Company Profile
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Manufacturing & capacity metrics</div>
              </div>
              <span className="text-xs font-semibold text-emerald-400 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                PDF
              </span>
            </a>

            <a
              href="https://www.alishangreenenergy.com/wp-content/uploads/2024/02/Alishan-Product-Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#0A192F] border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center justify-between group"
            >
              <div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                  Product Brochure
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Encapsulants & backsheets catalog</div>
              </div>
              <span className="text-xs font-semibold text-emerald-400 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                PDF
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
