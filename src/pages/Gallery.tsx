import React, { useState } from 'react';
import { 
  Camera, 
  Layers, 
  FlaskConical, 
  Award, 
  Sparkles, 
  ZoomIn, 
  X, 
  ArrowRight, 
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface GalleryItem {
  id: string;
  title: string;
  category: 'manufacturing' | 'laboratory' | 'cleanroom' | 'exhibitions';
  image: string;
  description: string;
  tag: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'mfg-1',
    title: 'High-Precision Automated Extrusion Line',
    category: 'manufacturing',
    image: 'https://www.alishangreenenergy.com/wp-content/uploads/2025/01/5P1A0159.jpg',
    description: 'State-of-the-art multi-layer continuous polymer extrusion lines equipped with automatic beta-gauge thickness control.',
    tag: 'Extrusion Line 1'
  },
  {
    id: 'lab-1',
    title: 'In-House NABL Accredited Testing Facility',
    category: 'laboratory',
    image: 'https://www.alishangreenenergy.com/wp-content/uploads/2025/01/01.jpg',
    description: 'NABL TC 15544 certified laboratory housing spectrophotometers, gel content extraction baths, and thermal shrinkage testers.',
    tag: 'NABL TC 15544'
  },
  {
    id: 'cleanroom-1',
    title: 'Precision Slitting & Cleanroom Finishing',
    category: 'cleanroom',
    image: 'https://www.alishangreenenergy.com/wp-content/uploads/2026/07/AVMB0008.jpg',
    description: 'ISO Class 7 cleanroom environment with controlled humidity and temperature for automated roll slitting and foil sealing.',
    tag: 'Cleanroom Packaging'
  },
  {
    id: 'expo-1',
    title: 'Renewable Energy India Expo (REI) Pavilion',
    category: 'exhibitions',
    image: 'https://www.alishangreenenergy.com/wp-content/uploads/2025/01/REI-EXPO.jpg',
    description: 'Alishan Green Energy showcasing next-generation POE & Ultra-Fast Cure EVA films to international solar module manufacturers.',
    tag: 'REI Expo'
  },
  {
    id: 'expo-2',
    title: 'REI 2024 Industry Showcase & Technology Exchange',
    category: 'exhibitions',
    image: 'https://www.alishangreenenergy.com/wp-content/uploads/2025/01/REI-2024-1.jpg',
    description: 'B2B consultations and technical datasheet presentations with tier-1 PV module makers at Renewable Energy India 2024.',
    tag: 'REI 2024'
  },
  {
    id: 'mfg-2',
    title: 'Precision Fast Cure EVA Roll Output',
    category: 'manufacturing',
    image: 'https://www.alishangreenenergy.com/wp-content/uploads/2021/09/alishan-fc.jpg',
    description: 'Freshly extruded Alishan FC (Fast Cure EVA) film master roll undergoing optical clarity and cross-linking quality audit.',
    tag: 'EVA Production'
  },
  {
    id: 'mfg-3',
    title: 'Advanced POE Co-Extruded Encapsulant Rolls',
    category: 'manufacturing',
    image: 'https://www.alishangreenenergy.com/wp-content/uploads/2021/09/Alishan-POE.jpg',
    description: 'Polyolefin Elastomer (POE) rolls prepared for bifacial and glass-glass high-efficiency TOPCon / HJT PV laminations.',
    tag: 'POE Extrusion'
  },
  {
    id: 'cleanroom-2',
    title: 'Protective Barrier Solar Backsheet Rolls',
    category: 'cleanroom',
    image: 'https://www.alishangreenenergy.com/wp-content/uploads/2021/09/backsheets.jpg',
    description: 'Tri-layer Fluoropolymer Backsheet rolls staged in climate-controlled warehouse ready for dispatch to module manufacturers.',
    tag: 'Backsheet Storage'
  },
  {
    id: 'mfg-4',
    title: 'Alishan EPE Co-Extruded Multi-Layer Film',
    category: 'manufacturing',
    image: 'https://www.alishangreenenergy.com/wp-content/uploads/2021/09/alishan-epe.jpg',
    description: 'Engineered EVA-POE-EVA sandwich structure providing high volume resistivity with optimized lamination cycle times.',
    tag: 'EPE Co-Extrusion'
  }
];

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos', icon: Camera },
    { id: 'manufacturing', label: 'Manufacturing Facility', icon: Layers },
    { id: 'laboratory', label: 'Testing Lab (NABL)', icon: FlaskConical },
    { id: 'cleanroom', label: 'Cleanroom & Packaging', icon: Sparkles },
    { id: 'exhibitions', label: 'Exhibitions & Events', icon: Award },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold">
          <Camera className="w-4 h-4 mr-1" />
          <span>Infrastructure &amp; Operations Showcase</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Manufacturing Facility &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
            Infrastructure Gallery
          </span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Take an authentic visual tour inside Alishan Green Energy's manufacturing plants, in-house NABL TC 15544 accredited testing laboratories, climate-controlled cleanrooms, and global clean energy trade expos.
        </p>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4 text-left">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
            <div className="text-emerald-400 font-bold text-lg">Multi-GW</div>
            <div className="text-xs text-slate-400">Extrusion Capacity</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
            <div className="text-emerald-400 font-bold text-lg">NABL TC 15544</div>
            <div className="text-xs text-slate-400">Testing Laboratory</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
            <div className="text-emerald-400 font-bold text-lg">ISO Class 7</div>
            <div className="text-xs text-slate-400">Cleanroom Slitting</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
            <div className="text-emerald-400 font-bold text-lg">100% In-House</div>
            <div className="text-xs text-slate-400">Quality Assurance</div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CATEGORY FILTER TABS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl max-w-3xl mx-auto backdrop-blur-md">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PHOTO GRID */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-slate-900/70 rounded-2xl border border-slate-800 hover:border-emerald-500/40 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-emerald-400 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                  {item.tag}
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/70 border border-slate-700/60 flex items-center justify-center text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ZoomIn className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-white font-bold text-base group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
                  <span>Click to view full photo</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>

            {/* Modal Details */}
            <div className="p-6 space-y-2 bg-slate-900 border-t border-slate-800">
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold">
                {selectedImage.tag}
              </div>
              <h3 className="text-xl font-bold text-white">
                {selectedImage.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. DOWNLOAD BROCHURE / AUDIT INVITATION CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-[#0D2137] to-slate-900 border border-emerald-500/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Schedule an On-Site Factory Audit
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We welcome Tier-1 solar module procurement teams and quality directors to inspect our manufacturing lines, cleanrooms, and testing setups in Raipur, Chhattisgarh.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 text-center"
            >
              Book Plant Visit
            </Link>
            <a
              href="https://www.alishangreenenergy.com/wp-content/uploads/2026/02/product-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm transition-all flex items-center justify-center space-x-2 text-center"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Download Brochure</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
