import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Newspaper, 
  Calendar, 
  User, 
  ArrowRight, 
  Tag, 
  Sparkles, 
  Award, 
  ExternalLink,
  BookOpen,
  Mic,
  Clock,
  Search,
  X,
  Share2
} from 'lucide-react';

export interface ArticleItem {
  id: string;
  title: string;
  category: 'blog' | 'event-exhibition' | 'conference';
  categoryLabel: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  summary: string;
  content: string[];
  tags: string[];
  featured?: boolean;
}

export const NEWS_ARTICLES: ArticleItem[] = [
  {
    id: 'intersolar-india-2025',
    title: 'Revolutionizing Renewable Energy: Alishan Green Energy Launches New Product Line at Intersolar India 2025',
    category: 'event-exhibition',
    categoryLabel: 'Event / Exhibition',
    date: 'February 14, 2025',
    author: 'Surender Kumar',
    readTime: '4 min read',
    image: '/images/gallery/rei-expo-pavilion.jpg',
    featured: true,
    tags: ['Intersolar India', 'Product Launch', 'POE Encapsulant', 'TOPCon'],
    summary:
      'Alishan Green Energy showcased its high-performance co-extruded EPE and zero-acetic POE encapsulants at Intersolar India 2025 in Gandhinagar, Gujarat, engaging over 40+ Tier-1 solar module manufacturers.',
    content: [
      'Alishan Green Energy actively participated in Intersolar India 2025, one of the most influential solar technology exhibitions in South Asia, hosted from February 12 to 14, 2025 at the Helipad Exhibition Centre in Gandhinagar, Gujarat.',
      'At this marquee industry gathering, Alishan unveiled its newly certified POE and high-transmission EPE encapsulant lines specifically engineered for N-type TOPCon and Heterojunction (HJT) bifacial photovoltaic modules. These formulations provide an unprecedented Water Vapor Transmission Rate (WVTR) barrier and zero acetic acid degradation.',
      'Our leadership team held in-depth technical exchanges with domestic and international PV module engineering heads, demonstrating our automated multi-GW manufacturing lines in Raipur and in-house NABL TC 15544 testing capabilities.',
      'The response underscored Alishan’s pivotal role in bolstering domestic supply chain resilience under India\'s Atma Nirbhar Bharat green energy initiative.'
    ]
  },
  {
    id: 'confused-about-solar-backsheet',
    title: 'Confused About Which Solar Backsheet to Choose? The Complete Engineering Guide to KPC, CPC & PPC',
    category: 'blog',
    categoryLabel: 'Blog & Technical Insights',
    date: 'January 28, 2025',
    author: 'Alishan Technical Desk',
    readTime: '6 min read',
    image: '/images/gallery/solar-backsheet-rolls.jpg',
    featured: true,
    tags: ['Backsheets', 'KPC vs CPC vs PPC', 'Engineering Guide', 'Weatherability'],
    summary:
      'Selecting the correct solar backsheet determines whether a PV module survives 25+ years in harsh desert or coastal environments. Here is a breakdown of fluoropolymer KPC, fluoro-coated CPC, and polyolefin PPC.',
    content: [
      'What is a solar backsheet? A backsheet is the critical exterior backplane component of a photovoltaic module that provides dielectric insulation, mechanical protection, and weather barrier protection across decades of outdoor exposure.',
      '1. Backpro KPC (Fluoropolymer PVDF Film): Built with a genuine outer fluoropolymer layer, a high-dielectric PET core, and a polyolefin bonding layer. Ideal for high-UV, coastal, and desert environments requiring ultimate hydrolytic stability.',
      '2. Backpro CPC (Dual-Side Fluoro-Coated): Employs roll-to-roll cured fluororesin coating technology over solar-grade PET. Delivers exceptional anti-yellowing and fire performance at competitive balance-of-system cost.',
      '3. Backpro PPC (Polyolefin Composite): A fluorine-free, environmentally recyclable multi-layer polyolefin solution offering intrinsically hydrophobic moisture barrier properties without the release of halogenated compounds during recycling.',
      'When choosing your backsheet, module engineers must balance UV cut-off, partial discharge voltage, peel strength to EVA, and module fire classification.'
    ]
  },
  {
    id: 'rei-2024-showcase',
    title: 'Alishan Green Energy Demonstrates Next-Gen Polymer Extrusions at Renewable Energy India (REI) Expo 2024',
    category: 'event-exhibition',
    categoryLabel: 'Event / Exhibition',
    date: 'October 10, 2024',
    author: 'Corporate Communications',
    readTime: '3 min read',
    image: '/images/gallery/rei-2024-showcase.jpg',
    tags: ['REI 2024', 'Greater Noida', 'Clean Energy Expo', 'B2B'],
    summary:
      'At the India Expo Centre in Greater Noida, Alishan presented its latest NABL-certified Ultra-Fast Cure (UFC) EVA and transparent backsheets to over 1,200 visiting solar procurement professionals.',
    content: [
      'Renewable Energy India Expo (REI) 2024 brought together the world\'s leading clean energy developers, EPCs, and module manufacturers. Alishan Green Energy’s pavilion served as a central hub for discussions on domestic module raw material localization.',
      'Key technical demonstrations included the high-throughput Alishan UFC EVA film, which enables solar module makers to cut lamination cycle duration from 14 minutes down to 9 minutes, increasing line throughput by up to 25% with zero compromise in gel content crosslinking.',
      'Visitors also reviewed live test specimens from our in-house NABL TC 15544 laboratory showing peel adhesion retention exceeding 75 N/cm after 1,500 hours of Damp Heat (DH 85°C / 85% RH) stress testing.'
    ]
  },
  {
    id: 'why-solar-encapsulants-matter',
    title: 'Why Solar Encapsulants Matter: The Polymer Science Protecting Your PV Module for 25+ Years',
    category: 'blog',
    categoryLabel: 'Blog & Technical Insights',
    date: 'September 15, 2024',
    author: 'R&D Polymer Division',
    readTime: '5 min read',
    image: '/images/gallery/ufc-eva-rolls.jpg',
    tags: ['Polymer Science', 'PID Resistance', 'Crosslinking Gel Content', 'EVA vs POE'],
    summary:
      'Solar encapsulants represent only ~3% of a module’s total bill of materials (BOM), yet account for over 60% of field reliability failures if degraded. Discover why high gel content and optical transmission are critical.',
    content: [
      'A solar PV module is an electrical power plant laminated into a single composite sandwich. Encapsulant films (EVA / POE / EPE) serve as the vital optical bridge and cushioning cushion holding solar cells safely between front glass and rear backsheet.',
      'Without premium crosslinking kinetics, low-quality EVA can suffer from photochemical deacetylation, producing free acetic acid that corrodes silver grid fingers and causes the notorious "snail-trail" power degradation.',
      'Alishan’s formulation incorporates specialized hindered amine light stabilizers (HALS), UV absorbers, and organic peroxides that achieve gel content ≥ 80% with minimal thermal shrinkage (<1.5%), ensuring your PV modules retain over 85% peak output across 25 to 30 years.'
    ]
  },
  {
    id: 'national-solar-summit-2024',
    title: 'National Solar Manufacturing Conclave: Scaling Domestic PV Supply Chains Under Atma Nirbhar Bharat',
    category: 'conference',
    categoryLabel: 'Conference',
    date: 'August 22, 2024',
    author: 'Surender Kumar',
    readTime: '4 min read',
    image: '/images/gallery/cleanroom-slitting.jpg',
    tags: ['National Solar Summit', 'Atma Nirbhar Bharat', 'CII', 'Keynote'],
    summary:
      'Alishan Green Energy joined industry policy leaders and module gigafactory heads in New Delhi to discuss raw material self-reliance, PLI scheme milestones, and domestic NABL testing standards.',
    content: [
      'Speaking at the National Solar Manufacturing Conclave in New Delhi, Alishan Green Energy leadership emphasized the strategic necessity of backward-integrating solar raw materials, particularly polymer encapsulants and backsheets.',
      'While domestic solar cell and module assembly capacities have grown exponentially under the ALMM and PLI frameworks, reliance on imported polymer films has historically posed supply chain vulnerability.',
      'Alishan’s state-of-the-art facility in Raipur demonstrates that Indian manufacturers can produce world-class EVA, POE, and backsheet products certified to rigorous IEC standards and verified in an accredited NABL testing facility.'
    ]
  },
  {
    id: 'cii-green-materials-forum',
    title: 'CII Clean Tech Leadership Forum: Quality Assurance & Standards for Multi-GW Solar Gigafactories',
    category: 'conference',
    categoryLabel: 'Conference',
    date: 'June 05, 2024',
    author: 'Technical QA Team',
    readTime: '4 min read',
    image: '/images/gallery/nabl-lab-facility.jpg',
    tags: ['CII Leadership', 'NABL TC 15544', 'Quality Standards', 'IEC 61215'],
    summary:
      'At the Confederation of Indian Industry (CII) Green Materials Conclave, Alishan delivered a keynote on standardized testing protocols for high-voltage PID resistance and TOPCon cell compatibility.',
    content: [
      'At the CII Green Energy Roundtable, Alishan’s quality leadership presented empirical testing data evaluating encapsulant performance under 1500V high-voltage system stress.',
      'With the global PV sector transitioning from P-type PERC to N-type TOPCon and HJT cells, moisture-induced front metallization corrosion has become a primary field failure vector. The presentation showcased how Alishan’s EPE and pure POE films prevent sodium ion migration and maintain insulation resistance.',
      'The forum highlighted the crucial role of certified testing labs like Alishan’s NABL TC 15544 facility in providing third-party verification and pre-dispatch testing for module manufacturers across India.'
    ]
  }
];

export const NewsEvents: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategoryParam = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(activeCategoryParam);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [readingArticle, setReadingArticle] = useState<ArticleItem | null>(null);

  // Sync state if URL query param changes
  React.useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setSelectedCategory(cat);
  }, [searchParams]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const categories = [
    { id: 'all', label: 'All Updates', icon: Newspaper },
    { id: 'blog', label: 'Blog & Insights', icon: BookOpen },
    { id: 'event-exhibition', label: 'Event / Exhibition', icon: Award },
    { id: 'conference', label: 'Conferences', icon: Mic },
  ];

  const filteredArticles = useMemo(() => {
    return NEWS_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'all' || article.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-16">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH HERO PHOTO */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pb-24 border-b border-emerald-500/20">
        {/* Background Hero Image with Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/heroes/news-hero.jpg"
            alt="International Renewable Energy Expo and Clean Tech Solar Exhibition"
            className="w-full h-full object-cover object-center scale-105 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/85 to-[#0A192F]/65"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
            <Newspaper className="w-4 h-4 mr-1" />
            <span>News, Technical Blog &amp; Global Industry Events</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            News, Events &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              Technical Insights
            </span>
          </h1>

          <p className="text-slate-200 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed drop-shadow">
            Stay updated with Alishan Green Energy's latest product launches, technical whitepapers on solar polymer science, trade exhibitions, and international clean energy conferences.
          </p>

          {/* Search & Category Filter Bar */}
          <div className="max-w-3xl mx-auto pt-4 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, technical topics, or events (e.g. Intersolar, Backsheets, POE)..."
              className="w-full bg-slate-900/80 border border-slate-700/80 focus:border-emerald-500 rounded-2xl pl-12 pr-4 py-3.5 text-white placeholder-slate-400 text-sm focus:outline-none backdrop-blur-md shadow-lg transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-md">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
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
        </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ARTICLES GRID */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800 space-y-4">
            <Newspaper className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No updates match your search</h3>
            <p className="text-slate-400 text-sm">
              Try resetting your search query or switching to another category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                handleCategoryChange('all');
              }}
              className="px-5 py-2 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col group cursor-pointer"
                onClick={() => setReadingArticle(article)}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md border border-slate-700/60 text-emerald-400 text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center space-x-1">
                    <Tag className="w-3 h-3" />
                    <span>{article.categoryLabel}</span>
                  </div>

                  {article.featured && (
                    <div className="absolute top-3 right-3 bg-emerald-500 text-slate-950 text-[11px] font-bold px-2 py-0.5 rounded-md shadow-md flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    {/* Metadata */}
                    <div className="flex items-center space-x-3 text-xs text-slate-400">
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1 text-slate-500" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1 text-slate-500" />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-white font-bold text-base sm:text-lg leading-snug group-hover:text-emerald-300 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  {/* Tags & Action */}
                  <div className="space-y-3 pt-2 border-t border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {article.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-800/70 text-slate-300 text-[10px] px-2 py-0.5 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
                      <span>Read Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* 3. ARTICLE READER MODAL */}
      {/* ========================================================================= */}
      {readingArticle && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn overflow-y-auto"
          onClick={() => setReadingArticle(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl my-8 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="relative h-64 sm:h-72 w-full bg-slate-950 shrink-0">
              <img
                src={readingArticle.image}
                alt={readingArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

              <button
                onClick={() => setReadingArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 space-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-xs font-bold">
                  {readingArticle.categoryLabel}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug drop-shadow-md">
                  {readingArticle.title}
                </h2>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-slate-200 text-sm sm:text-base leading-relaxed">
              {/* Metadata strip */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center">
                    <User className="w-3.5 h-3.5 mr-1 text-slate-500" />
                    {readingArticle.author}
                  </span>
                  <span>•</span>
                  <span className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-slate-500" />
                    {readingArticle.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-slate-500" />
                    {readingArticle.readTime}
                  </span>
                </div>
              </div>

              {/* Text Paragraphs */}
              {readingArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}

              {/* Tags */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                {readingArticle.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-800 text-emerald-400 text-xs font-medium"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-300">
                  Interested in testing samples or scheduling a technical consultation?
                </div>
                <Link
                  to="/contact"
                  onClick={() => setReadingArticle(null)}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shrink-0 transition-all"
                >
                  Contact Technical Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. NEWSLETTER / TECHNICAL WHITE PAPERS BANNER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-[#0C2238] to-slate-900 border border-emerald-500/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Stay Ahead with Alishan Technical Whitepapers
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Receive quarterly technical bulletins on solar polymer formulation, TOPCon encapsulation testing, and IEC / NABL standards directly to your inbox.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 text-center"
            >
              Subscribe for Updates
            </Link>
            <Link
              to="/products"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm transition-all text-center"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsEvents;
