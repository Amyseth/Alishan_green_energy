import React from 'react';
import {
  Leaf,
  Recycle,
  Droplets,
  Sun,
  ShieldCheck,
  Globe2,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface SustainabilityProps {
  onRequestQuote: () => void;
}

export const Sustainability: React.FC<SustainabilityProps> = ({ onRequestQuote }) => {
  const pillars = [
    {
      title: 'Green Polymer Engineering & Recyclability',
      desc: 'Advancing fluorine-free, mono-material, and recyclable polyolefin backsheet composites (Backpro PPC) that eliminate hazardous halogen release at end-of-life solar panel recycling.',
      icon: Recycle,
    },
    {
      title: 'Closed-Loop Extrusion & Zero Effluent',
      desc: 'Our Raipur plant operates with closed-loop chiller water circulation, resulting in zero industrial liquid effluent discharge and minimal municipal water consumption.',
      icon: Droplets,
    },
    {
      title: 'Energy Efficient Multi-Layer Extrusion',
      desc: 'State-of-the-art torque-controlled servo extruders and high-efficiency induction barrel heaters cut electrical consumption per linear meter of film by up to 28%.',
      icon: Sun,
    },
    {
      title: 'Accelerating India\'s 500 GW Clean Target',
      desc: 'Every gigawatt of encapsulant and backsheet we produce enables domestic solar plants to displace thousands of metric tons of coal-fired carbon emissions annually.',
      icon: Globe2,
    },
  ];

  return (
    <div className="space-y-20">
      {/* Header Banner with Custom Sustainability Hero Photo */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pb-28 border-b border-emerald-500/20">
        {/* Background Hero Image with Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/heroes/sustainability-hero.jpg"
            alt="Utility Scale Solar Park and Sustainable Clean Energy Landscape"
            className="w-full h-full object-cover object-center scale-105 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/85 to-[#0A192F]/65"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Leaf className="w-3.5 h-3.5" />
              <span>Environmental Stewardship &amp; ESG</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
              Sustainable Manufacturing For A Decarbonized Future
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed drop-shadow">
              At Alishan Green Energy, we believe the materials that generate clean solar energy must themselves be manufactured through responsible, low-impact, and resource-conscious industrial processes.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="space-y-2 p-4">
              <div className="text-3xl sm:text-5xl font-extrabold text-emerald-400">Zero</div>
              <div className="text-sm font-semibold text-white">Liquid Effluent Discharge (ZLD)</div>
              <p className="text-xs text-slate-400">
                100% closed-circuit water recirculation in cooling baths and chilling towers.
              </p>
            </div>

            <div className="space-y-2 p-4">
              <div className="text-3xl sm:text-5xl font-extrabold text-white">100%</div>
              <div className="text-sm font-semibold text-white">Internal Polymer Edge-Trim Recycling</div>
              <p className="text-xs text-slate-400">
                Extrusion edge trimmings are re-pelletized in-house for non-optical industrial applications.
              </p>
            </div>

            <div className="space-y-2 p-4">
              <div className="text-3xl sm:text-5xl font-extrabold text-amber-400">500 GW</div>
              <div className="text-sm font-semibold text-white">National 2030 Clean Energy Alignment</div>
              <p className="text-xs text-slate-400">
                Providing the domestic supply backbone for India's non-fossil renewable capacity expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Sustainability */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Actionable Responsibility
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Our Environmental Pillars
          </h2>
          <p className="text-sm text-slate-300">
            Concrete engineering commitments integrating environmental priorities into every stage of production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ISO 14001:2015 Deep Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Compliance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              ISO 14001:2015 Environmental Management Rigor
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Our Raipur facility is independently certified under ISO 14001:2015. We submit our extrusion lines to quarterly audits for carbon emission benchmarks, scrap minimization, and VOC mitigation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-[#0A192F] border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-emerald-400 flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1.5" />
                PFAS & Fluorine-Free Focus
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Development of Backpro PPC provides solar EPCs with a zero-fluoropolymer alternative anticipating stricter global chemical regulations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0A192F] border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-emerald-400 flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1.5" />
                Low Carbon Domestic Freight
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Raipur's central geographical position cuts domestic logistics transport emissions by over 60% compared to maritime shipping from overseas.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0A192F] border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-emerald-400 flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1.5" />
                25-30 Year Lifetime Durability
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Preventing premature solar panel failure in the field is the single most effective way to optimize the lifecycle carbon footprint of solar investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Build Greener Solar Modules With Alishan
          </h2>
          <p className="text-sm text-slate-300">
            Request our ESG dossier and discuss how our low-emission polymer formulations support your green supply chain scorecards.
          </p>
          <div>
            <button
              type="button"
              onClick={onRequestQuote}
              className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-xl shadow-emerald-500/20 inline-flex items-center space-x-2"
            >
              <span>Connect With Our Sustainability Team</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
