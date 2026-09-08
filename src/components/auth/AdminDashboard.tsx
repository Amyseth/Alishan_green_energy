import React, { useState } from 'react';
import {
  ShieldCheck,
  LogOut,
  User,
  Clock,
  Layers,
  Award,
  Activity,
  CheckCircle,
  AlertCircle,
  FileText,
  Search,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Cpu,
  RefreshCw,
  Lock,
} from 'lucide-react';
import { use2FA } from '../../context/AuthContext';
import { COMPANY_INFO } from '../../data/company';

export const AdminDashboard: React.FC = () => {
  const { user, auditLogs, logout } = use2FA();
  const [activeTab, setActiveTab] = useState<'quotes' | 'audit' | 'plants'>('quotes');
  const [searchQuery, setSearchQuery] = useState('');

  const mockQuotes = [
    {
      id: 'RFQ-2026-8941',
      client: 'Adani Solar Manufacturing Ltd.',
      contactPerson: 'Suresh Patel (Procurement Head)',
      product: 'ALISHAN UV Transparent Fast-Cure EVA',
      thickness: '0.45 mm',
      volumeGW: '1.2 GW / Year',
      status: 'APPROVED & DISPATCHED',
      date: 'Today, 11:32 AM',
      badgeClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    },
    {
      id: 'RFQ-2026-8940',
      client: 'Tata Power Solar Systems',
      contactPerson: 'Neha Mukherjee (Senior Engineer)',
      product: 'BACKPRO CPC Fluoro Backsheet (1500V)',
      thickness: '300 μm',
      volumeGW: '800 MW',
      status: 'NABL LAB VERIFIED',
      date: 'Today, 09:15 AM',
      badgeClass: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
    },
    {
      id: 'RFQ-2026-8939',
      client: 'Waaree Energies Gujarat Plant',
      contactPerson: 'Karan Dave (VP Supply Chain)',
      product: 'ALISHAN Ultra-Low Moisture POE Film',
      thickness: '0.50 mm (Bifacial TOPCon)',
      volumeGW: '2.5 GW',
      status: 'PENDING EXECUTIVE SIGN-OFF',
      date: 'Yesterday, 04:45 PM',
      badgeClass: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    },
  ];

  const filteredQuotes = mockQuotes.filter(
    (q) =>
      q.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Security Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0F223D] via-[#0A192F] to-[#0A1A2E] border border-emerald-500/40 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={user?.avatarUrl}
                alt={user?.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-500/60 shadow-lg"
              />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#0A192F] flex items-center justify-center">
                <ShieldCheck className="w-3 h-3 text-slate-950" />
              </span>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {user?.name}
                </h1>
                <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-500 text-slate-950 uppercase tracking-wide">
                  {user?.securityClearance}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">{user?.role} • {user?.department}</p>
              <div className="flex items-center space-x-3 text-[11px] text-slate-400 mt-1 font-mono">
                <span>Workstation: {user?.ipAddress}</span>
                <span>•</span>
                <span className="text-emerald-400 font-semibold">2FA Authenticated (Email + TOTP)</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 self-end md:self-center">
            <div className="text-right hidden sm:block">
              <div className="text-[11px] text-slate-400">Active TLS Session Expiry</div>
              <div className="text-xs font-mono font-bold text-slate-200">{user?.sessionExpiry} IST</div>
            </div>
            <button
              onClick={logout}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-red-500/20 text-slate-300 hover:text-red-300 border border-slate-700 hover:border-red-500/40 text-xs font-bold transition-all flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Terminate Session</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>2FA Protocol Status</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-extrabold text-white">SHA-256 OTP</div>
          <div className="text-[11px] text-emerald-400 flex items-center space-x-1">
            <CheckCircle className="w-3 h-3" />
            <span>Dual-Factor Enforced</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Raipur Plant Telemetry</span>
            <Activity className="w-4 h-4 text-teal-400" />
          </div>
          <div className="text-2xl font-extrabold text-white">3.5 GW Active</div>
          <div className="text-[11px] text-teal-400 flex items-center space-x-1">
            <CheckCircle className="w-3 h-3" />
            <span>Continuous Extrusion Lines 1–4</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>NABL TC 15544 Lab</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-extrabold text-white">100% Pass</div>
          <div className="text-[11px] text-amber-400 flex items-center space-x-1">
            <CheckCircle className="w-3 h-3" />
            <span>Gel Content &gt; 85% Verified</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Pending Solar RFQs</span>
            <FileText className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-extrabold text-white">4.5 GW Total</div>
          <div className="text-[11px] text-emerald-400 flex items-center space-x-1">
            <TrendingUp className="w-3 h-3" />
            <span>Tier-1 PV Module Makers</span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab('quotes')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
            activeTab === 'quotes'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Solar Quotes &amp; RFQs (Stage 3)</span>
        </button>

        <button
          onClick={() => setActiveTab('audit')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
            activeTab === 'audit'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Real-Time 2FA Security Audit Logs ({auditLogs.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('plants')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
            activeTab === 'plants'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>Plant Security &amp; ISO Operations</span>
        </button>
      </div>

      {/* Tab 1: Solar Quotes Management */}
      {activeTab === 'quotes' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">Tier-1 Module Manufacturer Inquiries</h3>
              <p className="text-xs text-slate-400">Manage volume allocations, custom slit dimensions, and NABL batch test reports.</p>
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search RFQs, Clients, Films..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#071322] text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
                  <tr>
                    <th className="px-5 py-3.5">RFQ Identifier</th>
                    <th className="px-5 py-3.5">Client &amp; Contact</th>
                    <th className="px-5 py-3.5">Product &amp; Spec</th>
                    <th className="px-5 py-3.5">Capacity</th>
                    <th className="px-5 py-3.5">Security Status</th>
                    <th className="px-5 py-3.5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/70 text-slate-300">
                  {filteredQuotes.map((q) => (
                    <tr key={q.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="px-5 py-4 font-mono font-bold text-emerald-400">{q.id}</td>
                      <td className="px-5 py-4">
                        <div className="font-bold text-white">{q.client}</div>
                        <div className="text-[11px] text-slate-400">{q.contactPerson}</div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="text-white font-medium">{q.product}</div>
                        <div className="text-[11px] text-slate-400 font-mono">Spec: {q.thickness}</div>
                      </td>
                      <td className="px-5 py-4 font-bold text-white">{q.volumeGW}</td>
                      <td className="px-5 py-4">
                        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border ${q.badgeClass}`}>
                          {q.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <button className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 font-bold transition-all">
                          Inspect
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Security Audit Logs */}
      {activeTab === 'audit' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">Cryptographic 2FA Audit Trail</h3>
              <p className="text-xs text-slate-400">Immutable ledger recording authentication events, token dispatches, and lockout events.</p>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Encryption: <strong className="text-emerald-400">AES-GCM-256</strong>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden">
            <div className="divide-y divide-slate-800/80">
              {auditLogs.map((log) => (
                <div key={log.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-slate-800/30 transition-colors">
                  <div className="flex items-start space-x-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold shrink-0 mt-0.5 ${
                        log.status === 'SUCCESS'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : log.status === 'BLOCKED'
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : log.status === 'FAILED'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}
                    >
                      {log.status}
                    </span>
                    <div>
                      <div className="font-bold text-white text-xs sm:text-sm">{log.event}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{log.details}</div>
                      <div className="text-[10px] text-slate-500 font-mono mt-1">
                        Protocol: {log.protocol} • Node: {log.ipAddress} • {log.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-[11px] font-mono text-slate-400 shrink-0">
                    {log.timestamp}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Plant Operations */}
      {activeTab === 'plants' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-white">Raipur Cleanroom Extrusion Complex</h4>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                OPERATIONAL
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Located at {COMPANY_INFO.factory.full}. Operating under ISO 9001 (Quality), ISO 14001 (Environment), and ISO 45001 (Occupational Safety) protocols.
            </p>
            <div className="space-y-2 text-xs pt-2">
              <div className="flex justify-between text-slate-400">
                <span>Extrusion Lines:</span>
                <span className="text-white font-bold">4 Multi-Layer Lines (Continuous)</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Thickness Profiling:</span>
                <span className="text-emerald-400 font-bold">Online Laser Beta-Gauge Active</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Cleanroom Standard:</span>
                <span className="text-white font-bold">Class 10,000 (ISO Class 7)</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-white">NABL Accredited Testing Lab (TC 15544)</h4>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                ISO/IEC 17025
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              In-house testing facility certifying gel content (ASTM D2765), damp heat stability (IEC 61215-2), PID resistance (-1500V), and peel adhesion.
            </p>
            <div className="space-y-2 text-xs pt-2">
              <div className="flex justify-between text-slate-400">
                <span>Certificate Number:</span>
                <span className="text-amber-400 font-bold font-mono">TC 15544 (NABL Accredited)</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>DH Chamber Status:</span>
                <span className="text-emerald-400 font-bold">1,000h+ Testing Active</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Optical Spectrophotometer:</span>
                <span className="text-white font-bold">280–1200nm Calibration OK</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AdminDashboard;
