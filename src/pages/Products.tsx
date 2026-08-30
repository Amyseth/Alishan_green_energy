import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Layers,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Table,
  Sparkles,
  ArrowRight,
  FileDown,
  Info,
  Sun,
  Droplets,
  Activity,
  Flame,
  Cpu,
} from 'lucide-react';
import { ENCAPSULANT_PRODUCTS, BACKSHEET_PRODUCTS } from '../data/products';
import { ProductItem } from '../types';

interface ProductsProps {
  onRequestQuote: (productName?: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onRequestQuote }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get('cat');

  const [activeCategory, setActiveCategory] = useState<'encapsulants' | 'backsheets'>(
    catParam === 'backsheets' ? 'backsheets' : 'encapsulants'
  );

  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  useEffect(() => {
    if (catParam === 'backsheets') {
      setActiveCategory('backsheets');
    } else if (catParam === 'encapsulants') {
      setActiveCategory('encapsulants');
    }
  }, [catParam]);

  const handleCategorySwitch = (cat: 'encapsulants' | 'backsheets') => {
    setActiveCategory(cat);
    setSearchParams({ cat });
  };

  const currentProducts: ProductItem[] =
    activeCategory === 'encapsulants' ? ENCAPSULANT_PRODUCTS : BACKSHEET_PRODUCTS;

  // Helper to assign visual property icons in the technical table
  const getSpecIcon = (prop: string) => {
    const lower = prop.toLowerCase();
    if (lower.includes('transmittance') || lower.includes('uv') || lower.includes('optical') || lower.includes('reflectance') || lower.includes('haze')) {
      return <Sun className="w-3.5 h-3.5 text-amber-400 shrink-0 mr-2" />;
    }
    if (lower.includes('gel') || lower.includes('crosslink') || lower.includes('cycle') || lower.includes('gain') || lower.includes('efficiency')) {
      return <Activity className="w-3.5 h-3.5 text-emerald-400 shrink-0 mr-2" />;
    }
    if (lower.includes('wvtr') || lower.includes('water') || lower.includes('moisture') || lower.includes('hydrolysis') || lower.includes('acid')) {
      return <Droplets className="w-3.5 h-3.5 text-cyan-400 shrink-0 mr-2" />;
    }
    if (lower.includes('peel') || lower.includes('adhesion') || lower.includes('bonding') || lower.includes('tensile')) {
      return <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mr-2" />;
    }
    if (lower.includes('voltage') || lower.includes('resistivity') || lower.includes('discharge') || lower.includes('pid') || lower.includes('system')) {
      return <Zap className="w-3.5 h-3.5 text-yellow-400 shrink-0 mr-2" />;
    }
    if (lower.includes('thermal') || lower.includes('shrinkage') || lower.includes('temperature') || lower.includes('fire')) {
      return <Flame className="w-3.5 h-3.5 text-rose-400 shrink-0 mr-2" />;
    }
    if (lower.includes('thickness') || lower.includes('polymer') || lower.includes('structure') || lower.includes('configuration') || lower.includes('layer')) {
      return <Layers className="w-3.5 h-3.5 text-teal-400 shrink-0 mr-2" />;
    }
    return <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-2" />;
  };

  return (
    <div className="pb-24 space-y-16">
      {/* ========================================================================= */}
      {/* 1. INDUSTRIAL HERO BANNER WITH GREEN / BLUE TEXT OVERLAYS */}
      {/* ========================================================================= */}
      <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-24 overflow-hidden border-b border-slate-800 bg-[#0A192F]">
        {/* Background Automated Line / Solar Polymer Extrusion Overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/80 to-[#0A192F]/65 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent z-10"></div>
          <img
            src="/images/heroes/products-hero.jpg"
            alt="Alishan Precision Solar Polymer Extrusion & Roll Production"
            className="w-full h-full object-cover opacity-40 filter contrast-110 scale-105"
          />
          <div className="absolute inset-0 tech-grid-bg opacity-25 z-10"></div>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none z-10"></div>
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 backdrop-blur-md shadow-lg shadow-black/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Official Technical Catalog & Verification Standards
              </span>
            </div>

            {/* Industrial Green/Blue Gradient Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              High-Performance{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Solar PV Encapsulants
              </span>{' '}
              & Backsheets
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Engineered polymer encapsulants and laminated backsheet formulations manufactured to guarantee 25+ years of zero-PID performance, ultra-low moisture ingress, and maximum power generation in extreme climate zones.
            </p>

            {/* Micro Industrial Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <Cpu className="w-4 h-4 text-cyan-400 mr-2" />
                NABL Accredited Testing (TC 15544)
              </span>
              <span className="flex items-center bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mr-2" />
                ASTM & IEC 61215 / 61730 Certified
              </span>
            </div>
          </div>

          {/* Category Navigation Tabs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 p-1.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800 max-w-xl shadow-2xl shadow-black/50">
            <button
              type="button"
              onClick={() => handleCategorySwitch('encapsulants')}
              className={`w-full sm:w-1/2 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-2.5 ${
                activeCategory === 'encapsulants'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Solar Encapsulant Films ({ENCAPSULANT_PRODUCTS.length})</span>
            </button>

            <button
              type="button"
              onClick={() => handleCategorySwitch('backsheets')}
              className={`w-full sm:w-1/2 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-2.5 ${
                activeCategory === 'backsheets'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Solar Backsheet Films ({BACKSHEET_PRODUCTS.length})</span>
            </button>
          </div>
        </div>
      </section>

      {/* Category Overview Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0F1E36]/80 border border-emerald-500/20 backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center">
              <Sparkles className="w-5 h-5 text-emerald-400 mr-2" />
              {activeCategory === 'encapsulants'
                ? 'Category 1: Solar Encapsulant Films (EVA / POE / EPE)'
                : 'Category 2: Solar Backsheet Films (Backpro Series)'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl">
              {activeCategory === 'encapsulants'
                ? 'Comprehensive range of Fast Cure EVA, Ultra-Fast Cure, Pure POE, and advanced Co-extruded EPE multi-layer films tailored for PERC, TOPCon, HJT, and bifacial module architectures.'
                : "India's premier range of coated and laminated backsheets manufactured in Raipur. Engineered with high-barrier fluoropolymer and polyolefin coatings for 1500V electrical isolation and ambient protection."}
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap items-center gap-3">
            <a
              href="https://www.alishangreenenergy.com/wp-content/uploads/2024/02/Alishan-Product-Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-all border border-slate-700 flex items-center hover:text-white"
            >
              <FileDown className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
              <span>Official Brochure (PDF)</span>
            </a>

            <button
              type="button"
              onClick={() =>
                onRequestQuote(
                  activeCategory === 'encapsulants'
                    ? 'Solar Encapsulant Films (EVA / POE / EPE) - Bulk RFQ'
                    : 'Solar Backsheet Films (Backpro Series) - Bulk RFQ'
                )
              }
              className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md"
            >
              Bulk RFQ for Category
            </button>
          </div>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {currentProducts.map((product) => {
            const isExpanded = selectedProductId === product.id;

            return (
              <div
                key={product.id}
                id={product.id}
                className="glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-emerald-500/40 transition-all duration-300 shadow-2xl"
              >
                {/* Product Card Top */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Header Row: Badges, Title & Clean B2B CTAs */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-2 border-b border-slate-800/60">
                    <div className="space-y-1.5">
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-bold text-slate-300 bg-slate-800/90 px-2.5 py-1 rounded-md border border-slate-700">
                          {product.code}
                        </span>
                        {product.badge && (
                          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                            {product.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {product.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-emerald-400">
                        {product.tagline}
                      </p>
                    </div>

                    {/* Clean B2B Call-to-Action Buttons Hooked Directly Into Supabase */}
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          onRequestQuote(`${product.name} (${product.code}) - Quote & Commercial Terms`)
                        }
                        className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/25 flex items-center group hover:-translate-y-0.5"
                      >
                        <span>Request A Quote</span>
                        <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          onRequestQuote(`${product.name} (${product.code}) - Technical Datasheet (TDS)`)
                        }
                        className="px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-all flex items-center shadow-md hover:-translate-y-0.5"
                      >
                        <FileDown className="w-4 h-4 mr-1.5 text-cyan-400" />
                        <span>Technical Datasheet</span>
                      </button>
                    </div>
                  </div>

                  {/* Main Product Layout with Authentic Image */}
                  <div className="flex flex-col lg:flex-row gap-6 items-start">
                    {product.image && (
                      <div className="w-full lg:w-72 h-56 sm:h-60 rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/60 shrink-0 relative group shadow-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-transparent pointer-events-none"></div>
                        <span className="absolute bottom-3 left-3 text-[10px] font-bold text-emerald-300 bg-slate-950/85 px-2.5 py-1 rounded-md border border-emerald-500/30 flex items-center shadow">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                          Manufactured In Raipur
                        </span>
                      </div>
                    )}

                    <div className="flex-1 space-y-4">
                      {/* Description */}
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {product.description}
                      </p>

                      {/* ========================================================================= */}
                      {/* 2. SLEEK TECHNICAL SPECS: VISUAL 4-BOX PROPERTY INDICATOR STRIP */}
                      {/* ========================================================================= */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                        {/* Box 1: UV Resistance / Optical Transmission */}
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center space-x-2.5">
                          <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                            <Sun className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                              {product.category === 'encapsulant' ? 'UV / Optical' : 'Solar Reflectance'}
                            </div>
                            <div className="text-xs font-extrabold text-white">
                              {product.category === 'encapsulant' ? '≥ 91.5% Trans.' : '≥ 85% Reflectance'}
                            </div>
                          </div>
                        </div>

                        {/* Box 2: Cross-Linking Density / System Insulation */}
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center space-x-2.5">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                            <Activity className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                              {product.category === 'encapsulant' ? 'Crosslink Density' : 'Dielectric System'}
                            </div>
                            <div className="text-xs font-extrabold text-white">
                              {product.category === 'encapsulant' ? '≥ 80% Gel Content' : '1500 VDC Rated'}
                            </div>
                          </div>
                        </div>

                        {/* Box 3: Moisture Transmission Rate (WVTR) */}
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center space-x-2.5">
                          <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                            <Droplets className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                              Moisture (WVTR)
                            </div>
                            <div className="text-xs font-extrabold text-cyan-300">
                              {product.id === 'alishan-poe'
                                ? '≤ 2.0 g/m²·day'
                                : product.category === 'encapsulant'
                                ? '≤ 4.5 - 6.5 g/m²'
                                : '≤ 1.0 - 1.2 g/m²'}
                            </div>
                          </div>
                        </div>

                        {/* Box 4: Peel Strength / Adhesion */}
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center space-x-2.5">
                          <div className="w-8 h-8 rounded-lg bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                            <ShieldCheck className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                              Peel Adhesion
                            </div>
                            <div className="text-xs font-extrabold text-emerald-400">
                              {product.category === 'encapsulant' ? '≥ 75 N/cm' : 'Zero Delam.'}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Key Features & Application */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                        <div className="space-y-3">
                          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-1.5" />
                            Key Engineering Advantages:
                          </h4>
                          <ul className="space-y-2 text-xs text-slate-300">
                            {product.features.map((feat, i) => (
                              <li key={i} className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 shrink-0 mt-1.5"></span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center">
                              <Zap className="w-4 h-4 text-amber-400 mr-1.5" />
                              Recommended Applications:
                            </h4>
                            <ul className="space-y-1.5 text-xs text-slate-400">
                              {product.recommendedApplications.map((app, i) => (
                                <li key={i} className="flex items-center">
                                  <span className="w-1 h-1 rounded-full bg-amber-400 mr-2 shrink-0"></span>
                                  <span>{app}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-2 pt-1">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                              Module Architecture Compatibility:
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {product.compatibility.map((tag, i) => (
                                <span
                                  key={i}
                                  className="px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800 text-[11px] font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Toggle Technical Specifications Table */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedProductId(isExpanded ? null : product.id)
                      }
                      className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <Table className="w-4 h-4" />
                      <span>
                        {isExpanded
                          ? 'Hide Detailed Technical Specifications'
                          : 'View Full Technical Datasheet Specs Table'}
                      </span>
                    </button>

                    <span className="text-[11px] text-slate-400 hidden sm:inline-block">
                      Tested in accordance with ASTM & IEC Standards (NABL Lab TC 15544)
                    </span>
                  </div>
                </div>

                {/* Expanded Specifications Table with Visual Property Icons */}
                {isExpanded && (
                  <div className="bg-slate-950/90 border-t border-slate-800 p-6 sm:p-8 animate-fadeIn">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                      <h4 className="text-sm font-bold text-white flex items-center">
                        <Table className="w-4 h-4 text-emerald-400 mr-2" />
                        {product.name} — Technical Properties & Verification Standards
                      </h4>
                      <button
                        type="button"
                        onClick={() =>
                          onRequestQuote(`${product.name} (${product.code}) - Official PDF Datasheet`)
                        }
                        className="text-xs text-cyan-400 hover:underline flex items-center font-medium"
                      >
                        <FileDown className="w-3.5 h-3.5 mr-1" />
                        Request Official PDF Datasheet
                      </button>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-slate-800">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-slate-800 bg-slate-900/90 text-slate-300">
                            <th className="py-3 px-4 font-bold uppercase tracking-wider">Property Parameter</th>
                            <th className="py-3 px-4 font-bold uppercase tracking-wider">Test Method</th>
                            <th className="py-3 px-4 font-bold uppercase tracking-wider">Unit</th>
                            <th className="py-3 px-4 font-bold uppercase tracking-wider text-emerald-400">Guaranteed Value</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/80 text-slate-300">
                          {product.specifications.map((spec, i) => (
                            <tr key={i} className="hover:bg-slate-900/50 transition-colors">
                              <td className="py-3 px-4 font-medium text-white flex items-center">
                                {getSpecIcon(spec.property)}
                                <span>{spec.property}</span>
                              </td>
                              <td className="py-3 px-4 text-slate-400 font-mono text-[11px]">{spec.testMethod}</td>
                              <td className="py-3 px-4 text-slate-400">{spec.unit}</td>
                              <td className="py-3 px-4 font-bold text-emerald-400 bg-emerald-500/5">
                                {spec.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Technical Comparison Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Engineering Decision Matrix
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Comparative Polymer Matrix Selection Guide
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onRequestQuote('Polymer Selection Matrix Consultation')}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white border border-slate-700 transition-colors"
            >
              Consult Application Engineer
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-300">
                  <th className="py-3 px-4 font-bold">Product Grade</th>
                  <th className="py-3 px-4 font-bold">Polymer Type</th>
                  <th className="py-3 px-4 font-bold">Primary Target Module</th>
                  <th className="py-3 px-4 font-bold">PID Immunity</th>
                  <th className="py-3 px-4 font-bold">Moisture Barrier</th>
                  <th className="py-3 px-4 font-bold">Crosslinking Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4 font-bold text-white">Alishan FC</td>
                  <td className="py-3 px-4 text-slate-400">Fast Cure EVA</td>
                  <td className="py-3 px-4">Standard Monofacial PERC</td>
                  <td className="py-3 px-4 text-emerald-400">High (PID Resistant)</td>
                  <td className="py-3 px-4 text-slate-300">Standard EVA Barrier</td>
                  <td className="py-3 px-4 text-slate-300">11 - 13 min</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4 font-bold text-white">Alishan UFC</td>
                  <td className="py-3 px-4 text-slate-400">Ultra-Fast Cure EVA</td>
                  <td className="py-3 px-4">Mega-Scale High Speed Lines</td>
                  <td className="py-3 px-4 text-emerald-400">High (PID Resistant)</td>
                  <td className="py-3 px-4 text-slate-300">Standard EVA Barrier</td>
                  <td className="py-3 px-4 text-emerald-400 font-semibold">8.5 - 10 min</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4 font-bold text-white">Alishan POE</td>
                  <td className="py-3 px-4 text-slate-400">Pure Polyolefin</td>
                  <td className="py-3 px-4">Bifacial Dual-Glass (G2G)</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">Absolute Zero PID</td>
                  <td className="py-3 px-4 text-cyan-400 font-bold">Ultra-Low (≤ 2.0)</td>
                  <td className="py-3 px-4 text-slate-300">14 - 16 min</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4 font-bold text-white">Alishan EPE / EPE-NT</td>
                  <td className="py-3 px-4 text-slate-400">Co-Extruded Trilayer</td>
                  <td className="py-3 px-4">n-Type TOPCon & Bifacial</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">Superior PID-p Block</td>
                  <td className="py-3 px-4 text-cyan-400 font-semibold">High Barrier (≤ 4.5)</td>
                  <td className="py-3 px-4 text-slate-300">11 - 13 min</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4 font-bold text-white">Alishan Low-Acid EVA</td>
                  <td className="py-3 px-4 text-slate-400">Acid-Scavenging EVA</td>
                  <td className="py-3 px-4">Fine-Grid PERC & TOPCon</td>
                  <td className="py-3 px-4 text-emerald-400">Excellent</td>
                  <td className="py-3 px-4 text-slate-300">Zero Acetic Corrosion</td>
                  <td className="py-3 px-4 text-slate-300">10 - 12 min</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4 font-bold text-white">Alishan EPE-DC</td>
                  <td className="py-3 px-4 text-slate-400">UV Down-Conversion</td>
                  <td className="py-3 px-4">Premium HJT & TOPCon</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">Complete Protection</td>
                  <td className="py-3 px-4 text-cyan-400 font-semibold">High Barrier (≤ 5.0)</td>
                  <td className="py-3 px-4 text-emerald-400 font-semibold">+1.5% to 2.5% Watt Boost</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
