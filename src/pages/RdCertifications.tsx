import React from 'react';
import {
  Award,
  ShieldCheck,
  Microscope,
  CheckCircle2,
  FileCheck2,
  Cpu,
  FlaskConical,
  Flame,
  Droplets,
  Zap,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface RdCertificationsProps {
  onRequestQuote: () => void;
}

export const RdCertifications: React.FC<RdCertificationsProps> = ({ onRequestQuote }) => {
  const labCapabilities = [
    {
      title: 'Soxhlet Chemical Crosslinking Extraction',
      standard: 'ASTM D2765 / Internal SOP',
      desc: 'Accurately quantifies gel content percentage in EVA & EPE films to verify complete thermal crosslinking and long-term elasticity.',
      icon: FlaskConical,
    },
    {
      title: 'Accelerated Damp Heat Testing (DH 1000h+)',
      standard: 'IEC 61215-2 MQT 13',
      desc: 'Simulates decades of tropical humidity exposure at 85°C and 85% Relative Humidity to detect delamination, yellowing, or acid degradation.',
      icon: Droplets,
    },
    {
      title: 'PID Stress & Polarization Testing',
      standard: 'IEC TS 62804-1',
      desc: 'Subjects modules and encapsulants to -1500V electrical stress at 85°C/85% RH, ensuring power loss remains strictly < 1%.',
      icon: Zap,
    },
    {
      title: 'UV Accelerated Weathering Chamber',
      standard: 'IEC 61215 / ASTM G154',
      desc: 'Intense fluorescent UVA/UVB exposure testing for UV cut-off retention, down-conversion fluorophore stability, and yellowing index (ΔYI).',
      icon: Flame,
    },
    {
      title: 'Precision 180° Peel Adhesion Dynamometer',
      standard: 'ASTM D903 / ISO 8510-2',
      desc: 'Measures interfacial bonding strength between encapsulant, front solar glass, silicon solar cell, and composite backsheet.',
      icon: Cpu,
    },
    {
      title: 'Laser Scanning & Spectrophotometry',
      standard: 'ASTM D1003 / ASTM E903',
      desc: 'High-resolution optical transmittance analysis from 280 nm to 1200 nm, verifying high transparency and down-conversion efficiency.',
      icon: Microscope,
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Banner with Custom NABL Lab Hero Photo */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pb-28 border-b border-emerald-500/20">
        {/* Background Hero Image with Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/heroes/rd-hero.jpg"
            alt="National Solar & Polymer Testing Laboratory NABL Accredited"
            className="w-full h-full object-cover object-center scale-105 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/85 to-[#0A192F]/65"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <span>Quality Assurance & Accreditations</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
              NABL-Accredited Precision & World-Class Standards
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed drop-shadow">
              Every square meter of solar film manufactured at Alishan Green Energy undergoes rigorous in-house testing under our NABL-accredited laboratory (Certificate No. TC 15544) and triple ISO-certified quality management systems.
            </p>
          </div>
        </div>
      </section>

      {/* Featured NABL In-House Testing Lab Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0F223D] via-[#0A192F] to-[#0B1528] border border-emerald-500/40 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="bg-white/95 px-3 py-1 rounded-xl shadow border border-white/20 inline-flex items-center">
                  <img
                    src="https://www.alishangreenenergy.com/wp-content/uploads/2026/07/nabl-logo.png"
                    alt="NABL Accredited Lab TC 15544"
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <span className="px-3.5 py-1.5 rounded-lg bg-emerald-500 text-slate-950 text-xs font-extrabold uppercase tracking-wide flex items-center shadow-lg shadow-emerald-500/20">
                  <Award className="w-4 h-4 mr-1.5" />
                  NABL TC 15544 Accredited
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                  ISO/IEC 17025 Compliant
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-white">
                In-House NABL Accredited Testing Laboratory
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Alishan Green Energy is proud to operate one of Central India's only dedicated, in-house NABL-accredited testing laboratories exclusively focused on solar polymeric encapsulants and backsheet composites.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-xs text-slate-400 font-semibold uppercase">Certificate Number</div>
                  <div className="text-lg font-bold text-emerald-400 mt-1">TC 15544</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">National Accreditation Board</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-xs text-slate-400 font-semibold uppercase">Batch Verification</div>
                  <div className="text-lg font-bold text-white mt-1">100% Traceability</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Test reports with every shipment</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-xs text-slate-400 font-semibold uppercase">Module Longevity</div>
                  <div className="text-lg font-bold text-amber-400 mt-1">25+ Years</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Accelerated outdoor aging simulation</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-900/90 border border-emerald-500/20 p-6 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center">
                <FileCheck2 className="w-4 h-4 text-emerald-400 mr-2" />
                Laboratory Test Documentation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We supply comprehensive Certificate of Analysis (COA) and batch test certificates validated under our NABL TC 15544 scope with every commercial delivery.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 shrink-0" />
                  Gel content & crosslinking percentage
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 shrink-0" />
                  Optical transmittance & UV cut-off
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 shrink-0" />
                  Peel adhesion strength to glass/cell
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 shrink-0" />
                  Thermal shrinkage (MD & TD)
                </li>
              </ul>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors"
                >
                  Request Sample NABL Test Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISO Management Systems */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-block bg-white/95 px-4 py-1.5 rounded-xl shadow border border-white/20 mb-2">
            <img
              src="https://www.alishangreenenergy.com/wp-content/uploads/2025/01/ISO-logo.png"
              alt="ISO 9001, ISO 14001, ISO 45001"
              className="h-12 w-auto object-contain mx-auto"
            />
          </div>
          <span className="block text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 max-w-fit mx-auto">
            Integrated Management System (IMS)
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Triple ISO Certifications
          </h2>
          <p className="text-sm text-slate-300">
            Operational excellence embedded across our entire Raipur manufacturing and R&D pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Quality Standard</div>
            <h3 className="text-xl font-bold text-white mt-1 mb-3">ISO 9001:2015</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Certified Quality Management System ensuring defect prevention, raw polymer lot inspection, automated thickness profiling, and continuous process optimization across multi-GW production.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Environmental Standard</div>
            <h3 className="text-xl font-bold text-white mt-1 mb-3">ISO 14001:2015</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Environmental Management System validating low carbon footprint extrusion, closed-circuit cooling water loops, energy-efficient operations, and zero harmful VOC emissions.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">Health & Safety</div>
            <h3 className="text-xl font-bold text-white mt-1 mb-3">ISO 45001:2018</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Occupational Health and Safety Management System guaranteeing state-of-the-art cleanroom protocols, automated polymer handling, zero-accident factory culture, and worker welfare.
            </p>
          </div>
        </div>
      </section>

      {/* Laboratory Testing Equipment & Protocols */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Instrumentation & Protocols
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Precision Analytical Testing Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Validated against ASTM and IEC international test methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labCapabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 hover:border-emerald-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                    {item.standard}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default RdCertifications;
