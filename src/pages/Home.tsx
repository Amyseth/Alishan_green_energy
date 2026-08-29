import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Zap,
  Layers,
  Sparkles,
  CheckCircle,
  Factory,
  ChevronRight,
  Sun,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { ENCAPSULANT_PRODUCTS, BACKSHEET_PRODUCTS } from '../data/products';
import QuoteForm from '../components/ui/QuoteForm';

interface HomeProps {
  onRequestQuote: (productName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onRequestQuote }) => {
  return (
    <div className="space-y-24 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH AUTHENTIC LOOPING MANUFACTURING VIDEO */}
      {/* ========================================================================= */}
      <section className="relative pt-36 sm:pt-44 pb-28 sm:pb-36 overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Looping Solar Manufacturing Video - Vivid & Dynamic */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-65 scale-105 filter brightness-105 contrast-120"
          >
            <source
              src="https://alishangreenenergy.com/wp-content/uploads/2021/09/final-1.mp4"
              type="video/mp4"
            />
          </video>
          {/* Balanced cinematic gradient overlays - clear video in center, seamless fade at edges */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/70 via-[#0A192F]/40 to-[#0A192F]/95"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0A192F]/30 to-[#0A192F]/90"></div>
          <div className="absolute inset-0 tech-grid-bg opacity-15"></div>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto space-y-7">
            {/* Top Pill Badge with Live Extrusion Indicator */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-emerald-500/50 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide shadow-2xl shadow-black/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>India's Premier Solar PV Polymer Extrusion Powerhouse</span>
            </div>

            {/* Headline with High-Contrast Drop Shadow */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Manifests Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                Solar Products & Solutions
              </span>
            </h1>

            {/* Sub-headline with High-Contrast Drop Shadow */}
            <p className="text-base sm:text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Specialized manufacturing of advanced <strong className="text-white font-bold">Encapsulant Films (EVA / POE / EPE)</strong> and high-durability <strong className="text-white font-bold">Solar Backsheets</strong> for global tier-1 PV module makers. Driving India's <span className="text-emerald-400 font-bold">'Atma Nirbhar Bharat'</span> mission.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
              <button
                type="button"
                onClick={() => onRequestQuote()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base shadow-xl shadow-emerald-500/30 transition-all duration-200 flex items-center justify-center space-x-2.5 group hover:-translate-y-0.5"
              >
                <span>Request A Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/products"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 backdrop-blur-md border border-slate-700 hover:border-emerald-500/50 text-white font-semibold text-base transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-black/40 hover:-translate-y-0.5"
              >
                <span>Explore Technical Catalog</span>
                <ChevronRight className="w-5 h-5 text-emerald-400" />
              </Link>
            </div>

            {/* Mini Trust Badges */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-300 border-t border-slate-800/80 mt-10">
              <span className="flex items-center bg-slate-900/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-800">
                <Award className="w-4 h-4 text-emerald-400 mr-2" />
                NABL Accredited Testing Lab (TC 15544)
              </span>
              <span className="flex items-center bg-slate-900/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-amber-400 mr-2" />
                IMS Certified: ISO 9001, 14001, 45001
              </span>
              <span className="flex items-center bg-slate-900/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-800">
                <Factory className="w-4 h-4 text-emerald-400 mr-2" />
                State-of-the-art Plant in Raipur, CG
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. METRIC COUNTERS SECTION (FLOATING GLASS SHELF) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-12 sm:-mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {COMPANY_INFO.keyMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-slate-900/90 backdrop-blur-xl border border-white/15 hover:border-emerald-500/40 shadow-2xl shadow-black/60 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all"></div>
              <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-emerald-400 mt-1 uppercase tracking-wider">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400 mt-2 font-medium">
                {metric.change}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORE PRODUCT HIGHLIGHTS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Advanced Material Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineered For Next-Gen PV Module Reliability
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Tailored formulations designed for n-type TOPCon, HJT, and high-efficiency PERC modules, preventing PID, snail trails, and moisture degradation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Encapsulants Card */}
          <div className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  7 Formulations
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Solar Encapsulant Films</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Engineered EVA, pure POE, and co-extruded EPE multi-layer films providing optimal optical transmittance, zero-PID performance, and ultra-low water vapor transmission.
                </p>
              </div>

              {/* Authentic Product Image Banner */}
              <div className="h-44 w-full rounded-2xl overflow-hidden relative border border-slate-800 bg-slate-900 group">
                <img
                  src="https://www.alishangreenenergy.com/wp-content/uploads/2025/01/alishan-fc.jpg"
                  alt="Alishan Solar Encapsulants"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-transparent pointer-events-none"></div>
                <span className="absolute bottom-2.5 left-3 text-[11px] font-bold text-emerald-300 bg-slate-950/80 px-2.5 py-0.5 rounded border border-emerald-500/30">
                  EVA / POE / EPE Co-Extruded Rolls
                </span>
              </div>

              {/* Sample Product Chips */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Featured Product Lines:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {ENCAPSULANT_PRODUCTS.slice(0, 4).map((p) => (
                    <div
                      key={p.id}
                      className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 flex items-center justify-between"
                    >
                      <span className="font-semibold text-white">{p.name}</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/20">
                        {p.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between">
              <Link
                to="/products?cat=encapsulants"
                className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 flex items-center"
              >
                View All Encapsulants
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
              <button
                type="button"
                onClick={() => onRequestQuote('Solar Encapsulant Films (EVA / POE / EPE)')}
                className="text-xs font-semibold px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                Inquire Specs
              </button>
            </div>
          </div>

          {/* Backsheets Card */}
          <div className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Backpro Series
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Solar Backsheet Films</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  India's premier range of coated and laminated backsheets. Manufactured in our state-of-the-art facility to guarantee 1500V electrical insulation and withstand severe ambient weathering.
                </p>
              </div>

              {/* Authentic Backsheet Image Banner */}
              <div className="h-44 w-full rounded-2xl overflow-hidden relative border border-slate-800 bg-slate-900 group">
                <img
                  src="https://www.alishangreenenergy.com/wp-content/uploads/2023/09/backsheets.jpg"
                  alt="Alishan Solar Backsheets"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-transparent pointer-events-none"></div>
                <span className="absolute bottom-2.5 left-3 text-[11px] font-bold text-amber-300 bg-slate-950/80 px-2.5 py-0.5 rounded border border-amber-500/30">
                  Backpro Coated & Laminated Series
                </span>
              </div>

              {/* Sample Product Chips */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Featured Product Series:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {BACKSHEET_PRODUCTS.map((p) => (
                    <div
                      key={p.id}
                      className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 flex items-center justify-between"
                    >
                      <span className="font-semibold text-white">{p.name}</span>
                      <span className="text-[10px] text-amber-400 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-500/20">
                        {p.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between">
              <Link
                to="/products?cat=backsheets"
                className="text-sm font-semibold text-amber-400 hover:text-amber-300 flex items-center"
              >
                View All Backsheets
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
              <button
                type="button"
                onClick={() => onRequestQuote('Solar Backsheet Films (Backpro Series)')}
                className="text-xs font-semibold px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                Inquire Specs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INNOVATION SHOWCASE: DOWN-CONVERSION & LOW-ACID */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#0E1E38] to-slate-900 border border-emerald-500/30 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <Zap className="w-3.5 h-3.5" />
                <span>Patented R&D Breakthrough</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Alishan EPE-DC: Next-Gen UV Down-Conversion
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Traditional encapsulants filter out UV radiation to protect polymers, wasting high-energy photons. Alishan's proprietary down-shifting chemistry absorbs UV (280–380 nm) and re-emits usable visible light (410–460 nm), boosting module power by up to <strong className="text-emerald-400">+1.5% to +2.5%</strong> while simultaneously shielding TOPCon and HJT cells from degradation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-emerald-400 font-bold text-lg">+5W to +10W</div>
                  <div className="text-xs text-slate-400">Power boost per standard 144-cell panel</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-emerald-400 font-bold text-lg">Zero UVID</div>
                  <div className="text-xs text-slate-400">Prevents UV-induced passivation decay</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col space-y-4 bg-slate-950/70 p-6 rounded-2xl border border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center">
                <Sun className="w-4 h-4 text-amber-400 mr-2" />
                Why Tier-1 Module Makers Choose Alishan
              </h4>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 shrink-0 mt-0.5" />
                  <span><strong>NABL TC 15544 testing:</strong> In-house accelerated weathering and gel content verification for every single production batch.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 shrink-0 mt-0.5" />
                  <span><strong>Low-Acid EVA formulation:</strong> Neutralizes acetic acid release, safeguarding silver busbars from corrosion.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 shrink-0 mt-0.5" />
                  <span><strong>Seamless processing:</strong> Tuned melt flow index (MFI) eliminates bubble entrapment and cell shifting in high-speed laminators.</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onRequestQuote('Alishan EPE-DC (UV Down-Conversion)')}
                  className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors"
                >
                  Request Technical Whitepaper & Samples
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ATMA NIRBHAR BHARAT & MANUFACTURING PROWESS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              National Solar Security
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Driving India's 'Atma Nirbhar Bharat' Solar Vision
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              India's solar expansion has historically relied heavily on overseas raw materials. Alishan Green Energy was founded with an unyielding conviction: true national energy independence requires indigenous solar component manufacturing.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              From our world-class polymer extrusion facility in Raipur, Chhattisgarh, we produce encapsulants and backsheets that match and exceed European and East Asian reliability benchmarks, shortening procurement lead times and insulating domestic module manufacturers from international freight volatility.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-lg font-bold text-white">Central India Hub</div>
                <div className="text-xs text-slate-400 mt-1">
                  Optimal logistics connectivity to major module manufacturing clusters across India.
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-lg font-bold text-white">100% Domestic</div>
                <div className="text-xs text-slate-400 mt-1">
                  Fully compliant with ALMM and domestic content requirement (DCR) solar projects.
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-slate-700/80 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center">
              <Factory className="w-5 h-5 text-emerald-400 mr-2" />
              Advanced Raipur Production Infrastructure
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <span className="font-semibold text-white block">Multi-Layer Co-Extrusion Lines:</span>
                  Equipped with high-precision gravimetric dosers and multi-manifold dies for uniform thickness across wide web widths.
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <span className="font-semibold text-white block">Class 10,000 Cleanroom Processing:</span>
                  Zero particulate contamination ensuring flawless optical transparency and defect-free lamination.
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <span className="font-semibold text-white block">Online Laser Beta-Gauge Scanners:</span>
                  Continuous cross-directional thickness profiling maintaining tolerances within ±3%.
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Interested in a Factory Tour or Audit?</div>
                <div className="text-[11px] text-slate-400">We welcome module manufacturer technical teams.</div>
              </div>
              <Link
                to="/contact"
                className="text-xs font-semibold px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
              >
                Schedule Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. EMBEDDED FAST QUOTE / CONTACT SECTION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Direct Manufacturer Access
              </span>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Request Specifications & Bulk Quotations
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect directly with our Raipur engineering team. Submit your required thickness, volume, and module architecture to receive customized pricing and NABL test reports within 24 hours.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>Sample rolls dispatched for qualification testing within 48 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>Custom slit widths and lengths matching automated layup lines</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>NABL Certificate TC 15544 batch test report included with every shipment</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
                Direct hotline: <a href="tel:+919171200097" className="text-emerald-400 font-semibold hover:underline">+91 91712 00097</a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#0A192F] p-6 sm:p-8 rounded-2xl border border-slate-700/80">
              <QuoteForm compact={false} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
