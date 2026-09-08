import React from 'react';
import {
  ShieldCheck,
  Lock,
  KeyRound,
  CheckCircle2,
  Server,
  Zap,
  Globe,
  Award,
} from 'lucide-react';
import { use2FA } from '../context/AuthContext';
import Stage1Credentials from '../components/auth/Stage1Credentials';
import Stage2OTP from '../components/auth/Stage2OTP';
import AdminDashboard from '../components/auth/AdminDashboard';

export const EnterpriseSecurityPortal: React.FC = () => {
  const { stage } = use2FA();

  // If already authenticated, show the full Admin Dashboard
  if (stage === 'AUTHENTICATED') {
    return (
      <div className="pt-24 pb-20 min-h-screen bg-[#070F1E]">
        <AdminDashboard />
      </div>
    );
  }

  return (
    <div className="pt-28 sm:pt-36 pb-20 min-h-screen relative overflow-hidden bg-[#070F1E] flex flex-col justify-center">
      {/* Background Ambient Security Lighting & Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Security Progress Stepper */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-slate-800 -z-0"></div>
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-emerald-500 transition-all duration-500 -z-0"
              style={{
                width: stage === 'CREDENTIALS' ? '0%' : '50%',
              }}
            ></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center space-y-1.5 z-10">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all shadow-lg ${
                  stage === 'CREDENTIALS'
                    ? 'bg-emerald-500 text-slate-950 ring-4 ring-emerald-500/20'
                    : 'bg-emerald-500 text-slate-950'
                }`}
              >
                1
              </div>
              <span className="text-[11px] font-bold text-slate-300">Credentials</span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center space-y-1.5 z-10">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all shadow-lg ${
                  stage === 'OTP' || stage === 'LOCKED'
                    ? 'bg-emerald-500 text-slate-950 ring-4 ring-emerald-500/20'
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                }`}
              >
                2
              </div>
              <span className="text-[11px] font-bold text-slate-300">2FA OTP</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center space-y-1.5 z-10">
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs bg-slate-800 text-slate-400 border border-slate-700 shadow-lg">
                3
              </div>
              <span className="text-[11px] font-bold text-slate-400">Dashboard</span>
            </div>
          </div>
        </div>

        {/* Main Glassmorphic Login Card */}
        <div className="max-w-xl mx-auto rounded-3xl bg-[#0B1728]/90 border border-emerald-500/30 p-7 sm:p-10 backdrop-blur-2xl shadow-2xl shadow-emerald-500/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400"></div>

          {stage === 'CREDENTIALS' ? <Stage1Credentials /> : <Stage2OTP />}
        </div>

        {/* Security Features Strip */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 text-left">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-start space-x-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Replay Attack Prevention</div>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                Tokens are strictly single-use and invalidated immediately upon successful verification.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-start space-x-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Brute-Force Lockout Guard</div>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                3 consecutive failed OTP entries trigger an automatic 2-minute account lockout.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-start space-x-3">
            <div className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">NABL &amp; ISO Compliance</div>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                Adheres to ISO 27001 cybersecurity and ISO 9001 quality management data integrity protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EnterpriseSecurityPortal;
