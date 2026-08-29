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

  return (
    <div className="pt-32 sm:pt-40 pb-24 space-y-16">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <span>Official Technical Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            High-Performance Solar PV Materials
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Engineered polymer encapsulants and laminated backsheet formulations manufactured to withstand 25+ years of intense UV radiation, damp heat, and electrical stress in extreme climate zones.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 max-w-xl">
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
      </section>

      {/* Category Overview Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0F1E36]/70 border border-emerald-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
              <FileDown className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
              <span>Official Brochure (PDF)</span>
            </a>

            <button
              type="button"
              onClick={() =>
                onRequestQuote(
                  activeCategory === 'encapsulants'
                    ? 'Solar Encapsulant Films (EVA / POE / EPE)'
                    : 'Solar Backsheet Films (Backpro Series)'
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
        <div className="space-y-8">
          {currentProducts.map((product) => {
            const isExpanded = selectedProductId === product.id;

            return (
              <div
                key={product.id}
                id={product.id}
                className="glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
              >
                {/* Product Card Top */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-bold text-slate-400 bg-slate-800 px-2.5 py-1 rounded">
                          {product.code}
                        </span>
                        {product.badge && (
                          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
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

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => onRequestQuote(`${product.name} (${product.code})`)}
                        className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20 flex items-center"
                      >
                        <span>Request Quote / Sample</span>
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                      </button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed max-w-5xl">
                    {product.description}
                  </p>

                  {/* Key Features & Application */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
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

                      <div className="space-y-2 pt-2">
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
                          ? 'Hide Technical Datasheet Specs'
                          : 'View Full Technical Datasheet Specs'}
                      </span>
                    </button>

                    <span className="text-[11px] text-slate-500 hidden sm:inline-block">
                      Tested in accordance with ASTM & IEC Standards (NABL Lab TC 15544)
                    </span>
                  </div>
                </div>

                {/* Expanded Specifications Table */}
                {isExpanded && (
                  <div className="bg-slate-950/90 border-t border-slate-800 p-6 sm:p-8 animate-fadeIn">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-bold text-white flex items-center">
                        <Table className="w-4 h-4 text-emerald-400 mr-2" />
                        {product.name} — Technical Properties & Verification Standards
                      </h4>
                      <button
                        type="button"
                        onClick={() => onRequestQuote(`${product.name} Technical Datasheet`)}
                        className="text-xs text-emerald-400 hover:underline flex items-center"
                      >
                        <FileDown className="w-3.5 h-3.5 mr-1" />
                        Request Official PDF Datasheet
                      </button>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-400">
                            <th className="py-2.5 px-4 font-semibold">Property Parameter</th>
                            <th className="py-2.5 px-4 font-semibold">Test Method</th>
                            <th className="py-2.5 px-4 font-semibold">Unit</th>
                            <th className="py-2.5 px-4 font-semibold text-emerald-400">Guaranteed Value</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-900 text-slate-300">
                          {product.specifications.map((spec, i) => (
                            <tr key={i} className="hover:bg-slate-900/40 transition-colors">
                              <td className="py-2.5 px-4 font-medium text-white">{spec.property}</td>
                              <td className="py-2.5 px-4 text-slate-400">{spec.testMethod}</td>
                              <td className="py-2.5 px-4 text-slate-400">{spec.unit}</td>
                              <td className="py-2.5 px-4 font-semibold text-emerald-400">{spec.value}</td>
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

      {/* Comparison Matrix Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl border border-white/10 p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Engineering Guide
              </span>
              <h3 className="text-2xl font-bold text-white">
                {activeCategory === 'encapsulants'
                  ? 'Encapsulant Film Formulation Matrix'
                  : 'Solar Backsheet Series Comparative Matrix'}
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Select formulation based on target module reliability and cell type
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400">
                  <th className="py-3 px-4 font-bold text-white">Product Name</th>
                  <th className="py-3 px-4 font-semibold">Primary Chemistry</th>
                  <th className="py-3 px-4 font-semibold">Key Advantage</th>
                  <th className="py-3 px-4 font-semibold">Optimal Cell / Module Fit</th>
                  <th className="py-3 px-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {currentProducts.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-4 font-bold text-white">
                      {p.name}
                      <span className="block text-[10px] text-slate-400 font-normal">
                        {p.code}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-300">
                      {p.specifications[0]?.value || 'Engineered Polymer'}
                    </td>
                    <td className="py-3 px-4 text-emerald-400 font-medium">
                      {p.tagline.split('—')[0]}
                    </td>
                    <td className="py-3 px-4 text-slate-400">
                      {p.compatibility.slice(0, 2).join(', ')}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => onRequestQuote(p.name)}
                        className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline"
                      >
                        RFQ
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom Custom Formulation & Testing CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">
              Require Custom Widths, Thicknesses, or UV Cut-Offs?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Our in-house NABL-accredited R&D facility can formulate customized polymer blends, co-extruded thicknesses (up to 0.70mm), and widths up to 1350mm matching your automated laminators.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onRequestQuote('Custom Polymer Formulation / Joint R&D')}
            className="shrink-0 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-xl shadow-emerald-500/20"
          >
            Request Custom Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;
