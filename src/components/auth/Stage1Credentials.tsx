import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ShieldCheck, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { use2FA, DEMO_USERS } from '../../context/AuthContext';
import ForgotPasswordModal from './ForgotPasswordModal';

export const Stage1Credentials: React.FC = () => {
  const { validateCredentials, isLoading, error, clearNotifications } = use2FA();

  const [email, setEmail] = useState('aseth230@gmail.com');
  const [password, setPassword] = useState('Alishan@2026');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || isLoading) return;
    await validateCredentials(email, password, rememberMe);
  };

  const handleSelectQuickAccount = (demoEmail: string) => {
    const acc = DEMO_USERS[demoEmail];
    if (acc) {
      setEmail(acc.profile.email);
      setPassword(acc.passwordHash);
      clearNotifications();
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Stage Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Stage 1: Primary Authentication</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Enterprise Security Sign-In
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
          Access the secure Alishan solar manufacturing portal. 2FA verification will be enforced on the next step.
        </p>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm flex items-start space-x-2.5 animate-shake">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">{error}</div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Work Email */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-200 flex items-center justify-between">
            <span>Work Email Address</span>
            <span className="text-[11px] text-slate-400 font-normal">Registered Corporate Email</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) clearNotifications();
              }}
              placeholder="aseth230@gmail.com"
              className="w-full bg-[#071322] border border-slate-700/80 focus:border-emerald-500 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none transition-all focus:ring-1 focus:ring-emerald-500/50 shadow-inner"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-200">Security Password</label>
            <button
              type="button"
              onClick={() => setIsForgotModalOpen(true)}
              className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              Forgot password?
            </button>
          </div>
          <div className="relative">
            <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) clearNotifications();
              }}
              placeholder="••••••••••••"
              className="w-full bg-[#071322] border border-slate-700/80 focus:border-emerald-500 rounded-xl pl-10 pr-11 py-3 text-white placeholder-slate-500 text-sm focus:outline-none transition-all focus:ring-1 focus:ring-emerald-500/50 shadow-inner"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-1 transition-colors"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center space-x-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-emerald-500/40 focus:ring-offset-0 transition-colors cursor-pointer"
            />
            <span className="text-xs text-slate-300 font-medium">Keep workstation session active</span>
          </label>
          <span className="text-[11px] text-slate-400">TLS 1.3 256-bit</span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
              <span>Verifying Credentials...</span>
            </div>
          ) : (
            <>
              <span>Verify &amp; Proceed to 2FA</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>

      {/* Quick Select Demo Accounts for Reviewer */}
      <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center space-x-1 font-semibold text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Quick-Load Demo Test Accounts</span>
          </span>
          <span>Click to autofill</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => handleSelectQuickAccount('aseth230@gmail.com')}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              email === 'aseth230@gmail.com'
                ? 'bg-emerald-500/15 border-emerald-500/50 text-white'
                : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="text-xs font-bold text-emerald-400">Amit Seth (CTSO)</div>
            <div className="text-[11px] text-slate-300 truncate">aseth230@gmail.com</div>
          </button>

          <button
            type="button"
            onClick={() => handleSelectQuickAccount('qa.lead@alishangreenenergy.com')}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              email === 'qa.lead@alishangreenenergy.com'
                ? 'bg-emerald-500/15 border-emerald-500/50 text-white'
                : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="text-xs font-bold text-teal-400">NABL Lab Lead</div>
            <div className="text-[11px] text-slate-300 truncate">qa.lead@alishangreenenergy.com</div>
          </button>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        isOpen={isForgotModalOpen}
        onClose={() => setIsForgotModalOpen(false)}
        defaultEmail={email}
      />
    </div>
  );
};
export default Stage1Credentials;
