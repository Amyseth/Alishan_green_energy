import React, { useState } from 'react';
import {
  Sparkles,
  ChevronDown,
  ChevronUp,
  KeyRound,
  Shield,
  Copy,
  Check,
  Zap,
  Lock,
  Unlock,
  AlertTriangle,
  UserCheck,
} from 'lucide-react';
import { use2FA, DEMO_USERS } from '../../context/AuthContext';

export const ReviewerHelperCard: React.FC = () => {
  const {
    stage,
    otp,
    email,
    attemptsLeft,
    lockoutUntil,
    fillDemoCredentials,
    fillDemoOtp,
    verifyOtp,
    simulateWrongOtp,
    unlockSessionManually,
    resetToCredentials,
  } = use2FA();

  const [isOpen, setIsOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopyOtp = () => {
    if (otp) {
      navigator.clipboard.writeText(otp);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleAutoFillAndSubmitOtp = () => {
    const code = fillDemoOtp();
    if (code) {
      verifyOtp(code);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-sm sm:max-w-md w-full px-4 sm:px-0">
      <div className="bg-[#0B1728]/95 backdrop-blur-xl border border-emerald-500/40 rounded-3xl shadow-2xl shadow-emerald-500/10 overflow-hidden transition-all duration-300">
        {/* Helper Header */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-5 py-3.5 flex items-center justify-between bg-gradient-to-r from-emerald-500/15 via-[#0F223D] to-slate-900 text-left border-b border-emerald-500/20"
        >
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center space-x-2">
                <span>2FA Reviewer Simulation Tool</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500 text-slate-950 uppercase">
                  Live Helper
                </span>
              </div>
              <div className="text-[10px] text-slate-400">
                Current Pipeline State: <strong className="text-emerald-400 font-semibold">{stage}</strong>
              </div>
            </div>
          </div>
          {isOpen ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronUp className="w-4 h-4 text-slate-400" />}
        </button>

        {/* Collapsible Content */}
        {isOpen && (
          <div className="p-4 sm:p-5 space-y-4 text-xs">
            {/* Stage Indicator Pill */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-slate-400 font-medium">Authentication Stage:</span>
              <span className="px-2.5 py-1 rounded-lg font-bold text-xs flex items-center space-x-1.5 bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                {stage === 'CREDENTIALS' && <KeyRound className="w-3.5 h-3.5" />}
                {stage === 'OTP' && <Zap className="w-3.5 h-3.5 text-amber-400" />}
                {stage === 'AUTHENTICATED' && <UserCheck className="w-3.5 h-3.5 text-emerald-400" />}
                {stage === 'LOCKED' && <Lock className="w-3.5 h-3.5 text-red-400" />}
                <span>{stage}</span>
              </span>
            </div>

            {/* Test Credentials Box */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-bold text-slate-300 flex items-center justify-between">
                <span>Primary Test Credentials (Stage 1)</span>
                <span className="text-slate-400 text-[10px]">Alishan Enterprise</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-[11px] space-y-1 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-500">Email:</span>
                  <span className="text-emerald-400 font-bold">aseth230@gmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Password:</span>
                  <span className="text-amber-300 font-bold">Alishan@2026</span>
                </div>
              </div>
            </div>

            {/* Active OTP Monitor (Stage 2) */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-bold text-slate-300 flex items-center justify-between">
                <span>Secondary 2FA Token (Stage 2)</span>
                <span className="text-slate-400 text-[10px]">5-Min Cryptographic TOTP</span>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-r from-slate-950 via-emerald-950/40 to-slate-950 border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400">Current Valid Code:</div>
                  <div className="text-lg font-mono font-black tracking-widest text-emerald-300">
                    {otp ? otp : <span className="text-slate-600 text-sm font-normal italic">Generate at Stage 1</span>}
                  </div>
                </div>

                {otp && (
                  <div className="flex items-center space-x-1.5">
                    <button
                      type="button"
                      onClick={handleCopyOtp}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center space-x-1"
                      title="Copy OTP to Clipboard"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      type="button"
                      onClick={handleAutoFillAndSubmitOtp}
                      className="px-2.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center space-x-1"
                    >
                      <span>Fill &amp; Verify</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Security Simulation Actions */}
            <div className="pt-2 border-t border-slate-800 space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Security Safeguard Demonstrations
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={simulateWrongOtp}
                  disabled={stage !== 'OTP'}
                  className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-300 font-semibold text-[11px] transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center space-x-1"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>Test Failed OTP ({attemptsLeft}/3)</span>
                </button>

                <button
                  type="button"
                  onClick={unlockSessionManually}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 font-semibold text-[11px] transition-colors flex items-center justify-center space-x-1"
                >
                  <Unlock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Reset / Unlock</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ReviewerHelperCard;
